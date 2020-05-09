import React, { Component } from "react";
import Slide from "./carousel/Slide";
import Dots from "./carousel/Dots";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Fab from "@material-ui/core/Fab";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import red from "@material-ui/core/colors/red";
import logo from "../../../static/logos/logo.svg";
import github from "./assests/GitHub.png";
import coursekey from "./assests/ck.png";
import "./carousel.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const imgStyles = {
  padding: "5px",
  height: "70px",
  margin: "0 auto",
  display: "block",
};
const paragraphBody = {
  color: "white",
  fontSize: "16px",
  lineHeight: "1.5em",
};
const transition = "all 750ms";

class Showcase extends Component {
  slideCount = 4;
  componentWillMount() {
    this.setState({ index: 0 });
  }
  change = (index) => {
    this.setState({ index });
  };

  decreaseIndex() {
    let index = this.state.index - 1;
    if (index < 0) index = this.slideCount - 1;
    this.setState({ index });
  }

  increaseIndex() {
    let index = this.state.index + 1;
    if (index === this.slideCount) index = 0;
    this.setState({ index });
  }

  render() {
    const slide =
      typeof document !== "undefined"
        ? document.getElementById(`slide${this.state.index}`)
        : null;
    // the number is the height of the first slide this is a hack till later
    const slideHeight = slide ? slide.clientHeight : 277;
    return (
      <div
        role="region"
        aria-label="showcase"
        id="showcase"
        style={{ padding: "10px 0", overflow: "hidden" }}
      >
        <div
          id="container"
          style={{ maxWidth: "800px", width: "90%", margin: "0 auto" }}
        >
          <div id="carousel" style={{ margin: "0 auto", transition }}>
            <AutoPlaySwipeableViews
              animateHeight={true}
              style={{ borderRadius: "10px" }}
              interval={7000}
              index={this.state.index}
              onChangeIndex={this.change}
            >
              <Slide
                id={0}
                style={{ backgroundColor: green["800"] }}
                visible={this.state.index === 0}
                header={
                  <img src={coursekey} alt="CourseKey logo" style={imgStyles} />
                }
                headerBackColor={green["400"]}
                link="https://coursekeyeducation.com"
                title="CourseKey"
                content={
                  <p style={paragraphBody}>
                    Working with an amazing team to improve the educational
                    experience for students, instructors and administrators
                  </p>
                }
              />
              <Slide
                style={{ backgroundColor: grey["600"] }}
                id={1}
                visible={this.state.index === 1}
                header={<img src={logo} alt="Website logo" style={imgStyles} />}
                headerBackColor={grey["500"]}
                link="https://mrKannah.com"
                title="Updated Website"
                content={
                  <p style={paragraphBody}>
                    Upgraded my personal website by migrating it to GatsbyJS and
                    improving few things
                  </p>
                }
              />
              <Slide
                style={{ backgroundColor: blueGrey["600"] }}
                id={2}
                visible={this.state.index === 2}
                header={<img src={logo} alt="Website logo" style={imgStyles} />}
                headerBackColor={blueGrey["400"]}
                link="https://mrKannah.com/blog"
                title="New Blog"
                content={
                  <p style={paragraphBody}>
                    Implemented a blog for my website and migrated some of my
                    content to it
                  </p>
                }
              />
              <Slide
                id={3}
                style={{ backgroundColor: red["800"] }}
                visible={this.state.index === 3}
                header={
                  <img src={github} alt="Github logo" style={imgStyles} />
                }
                headerBackColor={red["400"]}
                link="https://github.com/fadeenk"
                title="Github Profile"
                content={
                  <p style={paragraphBody}>
                    You can view my latest work for the open source community
                    and side projects on my profile
                  </p>
                }
              />
            </AutoPlaySwipeableViews>
          </div>
          <div
            id="arrows"
            style={{
              display: "flex",
              justifyContent: "space-between",
              transition,
              height: 0,
              position: "relative",
              top: `calc((-${slideHeight}px - 48px) / 2)`,
            }}
          >
            <Fab
              className="fab"
              aria-label="previous"
              style={{ transition }}
              onClick={() => this.decreaseIndex()}
            >
              <ArrowBackIcon className="arrow" style={{ transition }} />
            </Fab>
            <Fab
              className="fab"
              aria-label="next"
              style={{ transition }}
              onClick={() => this.increaseIndex()}
            >
              <ArrowForwardIcon className="arrow" style={{ transition }} />
            </Fab>
          </div>
          <Dots
            id="dots"
            style={{ margin: "5px auto 0px" }}
            index={this.state.index}
            count={this.slideCount}
            onDotClick={(index) => this.setState({ index })}
          />
        </div>
      </div>
    );
  }
}

export default Showcase;
