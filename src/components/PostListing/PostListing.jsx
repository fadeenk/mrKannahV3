import React from "react";
import { Link } from "gatsby";
import {withStyles} from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import config from '../../../data/SiteConfig';

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: config.primary.main,
      textDecoration: 'none',
    },
  },
};

class PostListing extends React.Component {
  getPostList(postEdges) {
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList(this.props.postEdges);
    return (
      <div style={{
        width: '90%',
        fontSize: '1em',
        margin: '0 auto',
        padding: '1em 0',
        lineHeight: '1.5em',
        maxWidth: '800px',
      }}>
        {/* Your post list here. */
        postList.map((post, i) => (
          <Card style={{margin: '10px 0'}} key={i}>
            <CardContent>
              <img src={post.cover} width='40%' style={{float: 'left', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} />
              <h2 style={{
                textShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                fontSize: '2rem',
                lineHeight: '2rem',
                marginBottom: '0.75rem',
                marginTop: '0.75rem'
              }}>
                <span style={{position: 'absolute',
                  fontSize: '3rem',
                  transform: 'translate(-30%, -30%)',
                  color: config.primary.main,
                  opacity: 0.2,
                  userSelect: 'none',
                  }}>{post.title[0]}</span>
                <Link to={post.path} className={this.props.classes.link}>{post.title}</Link>
              </h2>
              {post.date} &mdash; {post.timeToRead} Min Read &mdash; In{' '}<br/>
              {post.excerpt}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(PostListing);
