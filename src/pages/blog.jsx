import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;
    const pageSEO = {
      title: `Blog | ${config.siteTitle}`,
      description: `Explore all articles and posts published on my website.`,
    };
    return (
      <Layout>
        <SEO url={this.props.location.href} pageSEO={pageSEO}/>
        <NavBar style={{background: config.secondary.dark}} location={this.props.location} />
        <div style={{ textAlign: 'left', backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`, padding: '1em 0' }}>
          <PostListing postEdges={postEdges} />
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: {regex:"/content/"} }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            category
            title
            tags
            author
            coverURL
            coverFile {
              publicURL
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
