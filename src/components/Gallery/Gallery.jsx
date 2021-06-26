import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

class myGallery extends Component {
  state = {
    images: [],
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, { photo, index }) => {
    console.log(photo, index);
    this.setState({ currentImage: index, viewerIsOpen: true });
  };

  closeLightbox = () => {
    this.setState({ currentImage: 0, viewerIsOpen: false });
  };

  componentDidMount() {
    const { photos } = this.props;
    Promise.all(
      photos.map((obj) => {
        const src = typeof obj === "string" ? obj : obj.src;
        if (obj.width && obj.height) {
          return obj;
        }
        let img = new Image();
        img.src = src;
        return new Promise(resolve => {
          img.onload = () => {
          const res = {
              src: img.src,
              height: img.height,
              width: img.width
          };
          typeof obj === "string" ? resolve(res): resolve({...obj, ...res});
          }
        })
      })
    ).then((images) => {
      this.setState({images});
    });
  }

  render() {
    const {images, viewerIsOpen, currentImage } = this.state;
    return (
      <div>
        <Gallery photos={images} onClick={this.openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              {/*TODO fix carousel cutting the image*/}
              <Carousel
                currentIndex={currentImage}
                views={images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.caption,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default myGallery;
