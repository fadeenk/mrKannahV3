import React from "react";
import { Link } from "gatsby";
import {withStyles} from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import {kebabCase} from 'lodash';
import PostTags from '../PostTags/PostTags';
import config from '../../../data/SiteConfig';

const styles = {
  link: {
    textDecoration: 'none',
    color: config.secondary.dark,
    '&:hover': {
      color: config.primary.main,
      textDecoration: 'none',
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
        author: postEdge.node.frontmatter.author,
        category: postEdge.node.frontmatter.category,
        cover: postEdge.node.frontmatter.coverURL || postEdge.node.frontmatter.coverFile.publicURL,
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
        <Card style={{margin: '10px 0'}}>
          <CardContent>
          {
            postList.map((post, i) => (
              <div key={i}>
                <Link to={post.path} className={this.props.classes.link}>
                  <img alt={post.title + 'Thumbnail'} src={post.cover} className="blogImage" style={{float: 'right', marginLeft: '10px', marginBottom: '10px', borderRadius: '4px'}} />
                  <h2 style={{
                    textShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                    fontSize: '2rem',
                    lineHeight: '2rem',
                    marginBottom: '0.75rem',
                    marginTop: '0.75rem'
                  }}>
                    {post.title}
                  </h2>
                </Link>
                <small style={{color: config.primary.dark}}>By: {post.author}</small><br/>
                {post.date} &mdash; {post.timeToRead} Min Read &mdash; In <Link to={`/categories/${kebabCase(post.category)}`} className={this.props.classes.link}>{post.category}</Link><br/>
                {post.excerpt} {post.tags ? (<br/>) : null} <PostTags tags={post.tags} />
                <br style={{clear: 'both'}} />
                {i < postList.length -1 ? <Divider style={{margin: '20px 0'}}/> : null}
              </div>
          ))}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(PostListing);
