import React from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";

class ResumePage extends React.Component {
  render() {
    const pageSEO = {
      title: `Contact | ${config.siteTitle}`,
      description: `Leave me a message and I will get to you as soon as possible.`,
    };
    return (
      <Layout>
        <SEO url={this.props.location.href} pageSEO={pageSEO} />
        <NavBar
          style={{ background: config.secondary.dark }}
          location={this.props.location}
        />
        <div
          style={{
            textAlign: "center",
            backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`,
            padding: "20vh 0",
          }}
        >
          <h1 style={{ color: "white" }}>Contact Me</h1>
          <Form />
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default ResumePage;
