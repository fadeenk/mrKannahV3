import React from "react";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import PDFViewer from "../components/PDFViewer"
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";


class ResumePage extends React.Component {
  render() {
    const pageSEO = {
      title: `Resume | ${config.siteTitle}`,
      description: `Review my resume.`,
    };
    return (
      <Layout>
        <SEO url={this.props.location.href} pageSEO={pageSEO}/>
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <div style={{ textAlign: 'center', backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`, padding: '1em 0' }}>
          <h1 style={{color: 'white'}}>My Resume</h1>
          <PDFViewer url='https://raw.githubusercontent.com/fadeenk/resume/master/resume.pdf' />
        </div>
        <Footer />
      </Layout>
    )
  }
};

export default ResumePage;
