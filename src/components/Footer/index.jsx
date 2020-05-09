import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import config from "../../../data/SiteConfig";

const userLinks = [
  {
    label: "GitHub",
    url: "https://github.com/fadeenk",
    icon: <FaGithub style={{ fill: "white" }} />,
  },
  {
    label: "Twitter",
    url: "https://twitter.com/fadeenk",
    icon: <FaTwitter style={{ fill: "white" }} />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/fadeek/",
    icon: <FaLinkedin style={{ fill: "white" }} />,
  },
];

class Footer extends Component {
  getLinkElements() {
    return userLinks.map((link) => (
      <a href={link.url} key={link.label}>
        <IconButton aria-label={link.label}>{link.icon}</IconButton>
      </a>
    ));
  }

  render() {
    return (
      <div
        role="region"
        aria-label="Footer"
        style={{
          background: config.secondary.dark,
          textAlign: "center",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        {this.getLinkElements()}
        <p style={{ color: "white", margin: 0 }}>{config.copyright}</p>
      </div>
    );
  }
}

export default Footer;
