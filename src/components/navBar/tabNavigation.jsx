import React, { Component } from "react";
import { navigate } from "gatsby"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DropDownMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import config from "../../../data/SiteConfig";

class TabNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getParentRouteValue = (value = this.props.location.pathname) => {
    // route[0] is root route '/'
    let route = this.props.routes.filter((route) => value.startsWith(route.value))[1];
    if (!route || !route.nested) {
      return value;
    } else {
      return route.value;
    }
  };

  openDropdownMenu = (event, value) => {
    let nestedTab = {};
    nestedTab[value] = event.currentTarget;
    this.setState(nestedTab);
  };

  dismissDropdown = (event, value) => {
    event.stopPropagation();
    let state = {};
    state[this.getParentRouteValue(value)] = null;
    this.setState(state);
  }

  generateDropdown(route, currentRoute) {
    let routes = [route, ...route.nested].map((route) => {
      const color = route.value.toLowerCase() === currentRoute ?
        config.primary.main :
        'black';
      return (
        <MenuItem role="menuitem" key={route.value} value={route.value} style={{color}} onClick={(event) => {
          this.dismissDropdown(event, route.value);
          navigate(route.value);
        }}>
          {route.label}
        </MenuItem>
      )
    });
    return (
      <DropDownMenu role="complementary" id={`dropdown${route.value}`} open={Boolean(this.state[route.value])}
                    value={route.value}
                    anchorEl={this.state[route.value]}
                    onClose={(event) => this.dismissDropdown(event, route.value)}
      >
        {routes}
      </DropDownMenu>
    )
  }

  render() {
    const {routes, currentRoute} = this.props;
    const tabs = routes.map((route) => {
      // if not nested return simple route
      if (!Array.isArray(route.nested)) {
        return (
          <Tab key={route.value} value={route.value}
               label={route.label}
               classes={{label: this.props.classes.label}}
               onClick={() => navigate(route.value)}
          />
        )
      }
      // else has nested
      const label = `${route.label} ▼`;
      return (
        <Tab key={route.value} value={route.value}
             onClick={(event) => this.openDropdownMenu(event, route.value)}
             classes={{label: this.props.classes.label}}
             label={
                <div>
                  <span style={{fontSize: '14px'}}>{label}</span>
                  {this.generateDropdown(route, currentRoute)}
                </div>
             }
        />
      )
    });
    return (
      <Tabs id="navigation" value={this.getParentRouteValue()} centered variant="fullWidth" className='desktop'
            onChange={(event, value) => this.openDropdownMenu(value)}
            classes={{indicator: this.props.classes.indicator}}
      >
        {tabs}
      </Tabs>
    )
  }
}


export default withStyles({
  indicator: {backgroundColor: config.primary.light},
  label: {color: 'white'}
})(TabNavigation);
