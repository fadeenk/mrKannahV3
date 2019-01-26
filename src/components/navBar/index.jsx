import React, { Component } from "react";
import {Link} from 'gatsby';
import logo from '../../../static/logos/logo-48.png';
import TabNavigation from './tabNavigation';
import DrawerNavigation from './drawerNavigation';
import Responsive from 'react-responsive-decorator';


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
  label: 'Contact',
  value: '/contact',
}];

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }

  componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        isMobile: false
      });
    });
    this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        isMobile: true
      });
    });
  }

  render() {
    return (
      <div id="navbar" style={{background: 'green'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <Link to="/"><img className="App-logo" src={logo} alt="logo" style={{height: logoSize.height, float: 'left'}}/></Link>
          {this.state.isMobile ?
            <DrawerNavigation routes={routes} location={this.props.location} /> :
            <TabNavigation routes={routes} location={this.props.location} />
          }
        </div>
      </div>
    )
  }
}


export default Responsive(NavBar);
