import React from "react";
import { Link } from "gatsby";
import {withStyles} from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import {kebabCase} from 'lodash';
import config from '../../../data/SiteConfig';

const styles = {
  link: {
    textDecoration: 'none',
    color: config.secondary.dark,
    '&:hover': {
      color: config.primary.main,
      textDecoration: 'none',
    },
  },
  chip: {
    margin: '2px',
    background: config.primary.light,
    '&:hover': {
      background: config.primary.dark,
      color: 'white',
    },
  }
};

class PostListing extends React.Component {
  getPostList(postEdges) {
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  getTags(post) {
    if (!Array.isArray(post.tags)) return null;
    return (
      post.tags.map((tag, i) => {
        return (<Link to={`/tags/${kebabCase(tag)}`} key={i} style={{textDecoration: 'none'}}><Chip label={tag} clickable="true" className={this.props.classes.chip}/></Link>)
      })
    )
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
        <Card style={{margin: '10px 0'}}>
          <CardContent>
          {
            postList.map((post, i) => (
              <div key={i}>
                <img src={post.cover} width='40%' style={{float: 'left', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} />
                <h2 style={{
                  textShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                  fontSize: '2rem',
                  lineHeight: '2rem',
                  marginBottom: '0.75rem',
                  marginTop: '0.75rem'
                }}>
                  <Link to={post.path} className={this.props.classes.link}>{post.title}</Link>
                </h2>
                {post.date} &mdash; {post.timeToRead} Min Read &mdash; In <Link to={`/categories/${kebabCase(post.category)}`} className={this.props.classes.link}>{post.category}</Link><br/>
                {post.excerpt}<br/>
                {this.getTags(post)}<br/>
                {i < postList.length -1 ? <Divider style={{clear: 'both', margin: '10px 0'}}/> : null}
              </div>
          ))}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(PostListing);
