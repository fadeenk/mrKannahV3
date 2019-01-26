import React, { Component } from "react";
import {Link} from 'gatsby';
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
  value: '/about',
  nested: [{
    label: 'Software Development',
    value: '/about/softwareDevelopment',
  },{
    label: 'Education',
    value: '/about/education',
  }]
}, {
  label: 'Resume',
  value: '/resume',
}, {
  label: 'Blog',
  value: '/blog',
}, {
  label: 'Contact',
  value: '/contact',
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
