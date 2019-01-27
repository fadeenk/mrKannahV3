import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import PDFViewer from "../components/PDFViewer"
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";


class ResumePage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <div style={{ textAlign: 'center', backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`, padding: '1em 0' }}>
          <PDFViewer url='https://raw.githubusercontent.com/fadeenk/resume/master/resume.pdf' />
        </div>
        <Footer />
      </Layout>
    )
  }
};

export default ResumePage;
