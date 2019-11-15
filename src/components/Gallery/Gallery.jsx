import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


class myGallery extends Component {
  state = {
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, { photo, index }) => {
    console.log(photo, index);
    this.setState({currentImage: index, viewerIsOpen: true});
  };

  closeLightbox = () => {
    this.setState({currentImage: 0, viewerIsOpen: false});
  };

  render() {
    const { photos } = this.props;
    const { viewerIsOpen, currentImage } = this.state;
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
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
