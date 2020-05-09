import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div role="main">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display|Poppins"
            rel="stylesheet"
          />
        </Helmet>
        {children}
      </div>
    );
  }
}
