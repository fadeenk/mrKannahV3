import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import About from "../../components/About/About";
import config from "../../../data/SiteConfig";
import SEO from "../../components/SEO/SEO";
import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <SEO />
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <div style={{backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`}}>
          <About location={this.props.location} />
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default AboutPage;
