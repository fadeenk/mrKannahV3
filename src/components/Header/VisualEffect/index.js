import React from 'react';
import Particles from 'react-particles-js';
import config from './config';
import siteConfig from "../../../../data/SiteConfig";


class ParticlesBackground extends React.Component {
  componentWillMount() {
    this.setState({initialRender: true});
    this.handleResize();
    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize = (e) => {
    const width = e ? e.target.innerWidth : window.innerWidth;
    if (width < 600) {
      this.setState({height: 200})
    } else {
      this.setState({height: 350})
    }
  };

  render() {
    config.particles.color.value = siteConfig.primary.main;
    config.particles.line_linked.color = siteConfig.primary.light;
    config.particles.number.value = 100;
    if (!this.state.initialRender) {
      return (
        <Particles style={this.props.style} height={`${this.state.height}px`} params={config} />
      )
    }
    return (
      <div className='header' style={{width: '100%'}}></div>
    )
  }

  componentDidMount() {
    this.setState({initialRender: false});
  }

}

export default ParticlesBackground;
