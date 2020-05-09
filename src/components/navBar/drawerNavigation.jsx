import React, { Component } from "react";
import { navigate } from "gatsby";
import Drawer from "@material-ui/core/Drawer";
import Collapse from "@material-ui/core/Collapse";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";

import config from "../../../data/SiteConfig";

class DrawerNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
    };
    this.lastToggled = 0;
  }

  componentWillMount() {
    let updateState = {};
    this.props.routes
      .filter((route) => route.nested)
      .forEach((route) => {
        updateState[route.value] = true;
      });
    this.setState(updateState);
  }

  toggleDrawer = () => {
    let now = Date.now();
    if (now - this.lastToggled > 500) {
      this.lastToggled = now;
      this.setState({ openDrawer: !this.state.openDrawer });
    }
  };

  toggleMenu = (event, value) => {
    event.stopPropagation();
    let state = {};
    state[value] = !this.state[value];
    this.setState(state);
  };

  getMenuItemForRoute = (route, nested, parent) => {
    const color =
      route.value.toLowerCase() === this.props.location.pathname.toLowerCase()
        ? config.primary.light
        : "white";
    const hidden = !this.state[parent] && nested;
    return (
      <MenuItem
        key={route.value}
        value={route.value}
        style={{ color, display: hidden ? "none" : "inherit" }}
        role="menuitem"
        disabled={hidden}
        onClick={() => navigate(route.value)}
      >
        <span style={{ paddingLeft: nested ? "18px" : 0 }}>
          {route.nestedLabel || route.label}
        </span>
      </MenuItem>
    );
  };

  getMenuItemsForRouteWithNested = (route) => {
    const subItems = [route, ...route.nested].map((subRoute) => {
      return this.getMenuItemForRoute(subRoute, true, route.value);
    });
    const color =
      route.value.toLowerCase() === this.props.location.pathname
        ? config.primary.light
        : "white";
    const mainRoute = (
      <MenuItem
        role="menuitem"
        key={route.value}
        value={route.value}
        id={`toggle${route.value}`}
        aria-label={
          (this.state[route.value] ? "Collapse" : "Expand") + " " + route.label
        }
        style={{ color }}
        onClick={(event) => this.toggleMenu(event, route.value)}
      >
        {route.label}{" "}
        {this.state[route.value] ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>
    );
    return [mainRoute, subItems];
  };

  render() {
    const { routes } = this.props;
    const items = routes.map((route) => {
      if (!Array.isArray(route.nested)) {
        return this.getMenuItemForRoute(route, false);
      }
      return this.getMenuItemsForRouteWithNested(route);
    });
    return (
      <div style={{ textAlign: "right" }} className="mobile">
        <IconButton
          id="drawerButton"
          aria-label="open drawer"
          onClick={this.toggleDrawer}
        >
          <MenuIcon style={{ color: config.primary.main }} />
        </IconButton>
        <Drawer
          role="navigation"
          open={this.state.openDrawer}
          anchor="right"
          classes={{ paper: this.props.classes.paper }}
          onClose={this.toggleDrawer}
          style={{ textAlign: "left" }}
        >
          <MenuList id="mobileNav" role="menubar">
            {items}
          </MenuList>
        </Drawer>
      </div>
    );
  }
}

export default withStyles({
  paper: { backgroundColor: config.secondary.dark, minWidth: "200px" },
})(DrawerNavigation);
