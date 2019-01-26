import React, { Component } from 'react';
import { navigate } from "gatsby"
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class DrawerNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDrawer: false,
    }
    this.lastToggled = 0;
  }

  componentWillMount() {
    let updateState = {};
    this.props.routes.filter((route) => route.nested).forEach((route) => {
      updateState[route.value] = true;
    });
    this.setState(updateState);
  }

  toggleDrawer = () => {
    let now = Date.now();
    if (now - this.lastToggled > 500) {
      this.lastToggled = now;
      this.setState({openDrawer: !this.state.openDrawer})
    }
  };

  toggleMenu = (event, value) => {
    event.stopPropagation();
    let state = {};
    state[value] = !this.state[value];
    this.setState(state);
  }

  getMenuItemForRoute = (route, nested) => {
    const color = route.value.toLowerCase() === this.props.location.pathname ?
      'grey' :
      'black';
    return (
      <MenuItem key={route.value} value={route.value}
                style={{color}}
                onClick={() => navigate(route.value)}
      >
        <span style={{paddingLeft: nested ? '18px' : 0}}>{route.label}</span>
      </MenuItem>
    )
  }

  getMenuItemsForRouteWithNested = (route) => {
    const subItems = route.nested.map((subRoute) => {
      return this.getMenuItemForRoute(subRoute, true);
    });
    const color = route.value.toLowerCase() === this.props.location.pathname ?
      'grey' :
      'black';
    const mainRoute =
      <MenuItem key={route.value} value={route.value}
                style={{color, marginRight: '40px'}}
                onClick={() => navigate(route.value)}
      >
        {route.label}
        <IconButton onClick={(event) => this.toggleMenu(event, route.value)}
                    style={{width: '32px', height: '32px', zIndex: 1000, color, position: 'fixed', right: '5px'}}
        >
          {this.state[route.value] ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </MenuItem>;
    return [
      mainRoute,
      <Collapse key={route.label} in={this.state[route.value]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>{subItems}</List>
      </Collapse>
    ];
  }

  render() {
    const {routes} = this.props;
    const items = routes.map((route) => {
      if (!Array.isArray(route.nested)) {
        return this.getMenuItemForRoute(route, false);
      }
      return this.getMenuItemsForRouteWithNested(route);
    });
    return (
      <div style={{textAlign: 'right'}} className='mobile'>
        <IconButton onClick={this.toggleDrawer}>
          <MenuIcon style={{color: 'yellow', opacity: 0.7}}/>
        </IconButton>
        <Drawer open={this.state.openDrawer} anchor="right"
                onClose={this.toggleDrawer} style={{textAlign: 'left'}}>
          <List>
            {items}
          </List>
        </Drawer>
      </div>
    )
  }
}

export default DrawerNavigation;
