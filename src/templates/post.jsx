import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import urljoin from "url-join";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Layout from "../layout";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(window.location.search);
    const guessParam = urlParams.get('pass');
    this.state = {
      guess: guessParam || ""
    };
  }

  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.mdx;
    const {guess} = this.state;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    if (post.password && guess !== post.password) {
      return ( 
        <Layout>
          <div style={{
              textAlign: "left",
              backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`,
              padding: "1em 0",
            }}
          >
            <Card
              style={{ width: "90%", margin: "10px auto", maxWidth: "800px" }}
            >
              <CardContent>
                <TextField
                  fullWidth 
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete={post.slug}
                  onChange={(e) => this.setState({guess: e.target.value})}
                />
              </CardContent>
            </Card>
          </div>
        </Layout>       
      )
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO url={slug} postSEO={postNode} />
          <NavBar
            style={{ background: config.secondary.dark }}
            location={{ pathname: "/blog/" }}
          />
          <div
            style={{
              textAlign: "left",
              backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`,
              padding: "1em 0",
            }}
          >
            <Card
              style={{ width: "90%", margin: "10px auto", maxWidth: "800px" }}
            >
              <CardContent>
                <h1>{post.title}</h1>
                <div style={{ marginLeft: "5px" }}>
                  <MDXRenderer>{postNode.body}</MDXRenderer>
                </div>
                <PostTags tags={post.tags} />
                <div className="post-meta">
                  <SocialLinks postPath={slug} postNode={postNode} />
                </div>
                <Disqus postNode={postNode} />
              </CardContent>
            </Card>
          </div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        coverURL
        password
        coverFile {
          publicURL
        }
        date(formatString: "MMMM DD, YYYY")
        author
        authorTwitter
        publisher
        dateModified
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
