import React, { Component } from "react";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import {withStyles} from "@material-ui/core/styles"
import Chip from '@material-ui/core/Chip';
import config from "../../../data/SiteConfig";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    if (!Array.isArray(tags)) return null;
    return (
      tags.map((tag, i) => {
        return (<Link to={`/tags/${kebabCase(tag)}`} key={i} style={{textDecoration: 'none'}}><Chip label={`#${tag}`} clickable="true" className={this.props.classes.chip}/></Link>)
      })
    )
  }
}

export default withStyles({
  chip: {
    margin: '2px',
    background: config.primary.light,
    '&:hover': {
      background: config.primary.dark,
      color: 'white'}
  }
})(PostTags);
