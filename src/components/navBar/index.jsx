import React, { Component } from "react";
import {Link} from 'gatsby';
import urljoin from "url-join";
import logo from '../../../static/logos/logo.svg';
import TabNavigation from './tabNavigation';
import DrawerNavigation from './drawerNavigation';
import config from '../../../data/SiteConfig'


const logoSize = {
  width: 60,
  height: 48
};

const routes = [{
  label: 'Home',
  value: '/',
}, {
  label: 'About',
  value: urljoin(config.pathPrefix, '/about/'),
  nested: [{
    label: 'Education',
    value: urljoin(config.pathPrefix, '/about/education/'),
  },{
    label: 'Software Development',
    value: urljoin(config.pathPrefix, '/about/softwareDevelopment/'),
  }]
}, {
  label: 'Resume',
  value: urljoin(config.pathPrefix, '/resume/'),
}, {
  label: 'Blog',
  value: urljoin(config.pathPrefix, '/blog/'),
}, {
  label: 'Contact',
  value: urljoin(config.pathPrefix, '/contact/'),
}];

class NavBar extends Component {
  render() {
    return (
      <div id="navbar" style={this.props.style}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <Link to="/">
            <img src={logo} alt="logo" style={{height: logoSize.height, float: 'left', fill: config.primary.main}} />
          </Link>
          <DrawerNavigation routes={routes} location={this.props.location} />
          <TabNavigation routes={routes} location={this.props.location} />
        </div>
      </div>
    )
  }
}


export default NavBar;
