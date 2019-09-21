import React, { Component } from 'react';
import ParticlesBackground from './VisualEffect';
import ProfilePicture from './profilePicture';
import MyTypist from './myTypist';
import config from '../../../data/SiteConfig';
import "./header.css";

class Header extends Component {

  render() {
    return (
    <div role="banner" className='transition header' style={{backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light})`
        , color: 'white'}}>
        <div className='transition header' style={{display: 'table', width: '80vw', maxWidth: '600px', margin: '0 auto'}}>
          <ParticlesBackground style={{position: 'absolute', left: 0}} />
          <ProfilePicture />
          <div id="TextHolder" className='transition' style={{display: 'table-cell', verticalAlign: 'middle', position: 'relative'}}>
            <h1>Hi, I'm Fadee.</h1>
            <p style={{display: 'inline'}}>I engineer and build </p>
            <MyTypist />
          </div>
        </div>
      </div>
    )
  }
}


export default Header;
