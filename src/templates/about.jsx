import React, { Component } from 'react';
import Helmet from "react-helmet";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {navigate, graphql, StaticQuery} from "gatsby";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import Layout from "../layout";

const styles = () => ({
  indicator: {
    backgroundColor: config.secondary.dark
  },
});

const cardStyle = {
  fontSize: '14px',
  lineHeight: '2em',
  margin: '0 auto',
  maxWidth: '790px',
};

const AboutNavBar = ({ page, pages, classes, path }) => (
  <div id="about" style={{padding: '10px'}}>
    <Card style={cardStyle}>
      <Tabs style={{
        margin: '0 auto',
        lineHeight: '1.5em',
        maxWidth: '800px',
      }}
          classes={{indicator: classes.indicator}}
          onChange={(event, location) => navigate(location)}
          value={path}
          centered variant="fullWidth"
      >
        {pages.sort((a, b) => a.route - b.route).map(node =>
          <Tab key={node.route} label={node.title} value={node.route}
               style = {{backgroundColor: config.primary.main}} />
        )}
      </Tabs>
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </CardContent>
    </Card>
  </div>
);


class About extends Component {

  render() {
    const path = this.props.location.pathname;
    const pages = this.props.pageContext.pages;
    const page = this.props.data.markdownRemark;

    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <SEO />
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <div style={{backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`}}>
          <AboutNavBar page={page} pages={pages} classes={this.props.classes} path={path} />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default withStyles(styles)(About);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutPage($route: String!) {
    markdownRemark (frontmatter: {route: {eq: $route}}) {
      html
      frontmatter {
        route
        title
      }
    }
  }
`;
