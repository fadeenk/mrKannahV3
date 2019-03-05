import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import urljoin from "url-join";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMdx.edges;
    const pageSEO = {
      title: `${category} Posts | ${config.siteTitle}`,
      description: `Posts in category "${category}".`,
    };
    return (
      <Layout>
        <SEO url={this.props.location.href} pageSEO={pageSEO} />
        <NavBar style={{background: config.secondary.dark}} location={{pathname: urljoin(config.pathPrefix, '/blog/')}} />
        <div style={{ textAlign: 'left', backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`, padding: '1em 0' }}>
          <PostListing postEdges={postEdges} />
        </div>
        <Footer />
      </Layout>
    );
  }
}


/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            author
            category
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
