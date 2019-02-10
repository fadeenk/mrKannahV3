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

let nodeIndex = null;

const AboutNavBar = ({ data, classes, path }) => (
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
        {data.allMarkdownRemark.edges.map(({node}, i) => {
          if (path === node.frontmatter.route)  nodeIndex = i;
          return (<Tab key={i} label={node.frontmatter.title} value={node.frontmatter.route} style = {{backgroundColor: config.primary.main}} />)
        })}
      </Tabs>
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[nodeIndex].node.html }} />
      </CardContent>
    </Card>
  </div>
);


class About extends Component {

  render() {
    const path = this.props.location.pathname;
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <SEO />
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <div style={{backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`}}>
          <StaticQuery
            query={graphql`
              query AboutQuery {
                allMarkdownRemark(
                  sort: {
                    fields: [frontmatter___route]
                    order: ASC
                  }
                  filter: { fileAbsolutePath: {regex:"/about/"} }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        route
                        title
                      }
                    }
                  }
                }
              }
            `}
            render={data => <AboutNavBar data={data} classes={this.props.classes} path={path} />}
          />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default withStyles(styles)(About);
