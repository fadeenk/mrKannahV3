import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import picture from '../../../static/fadee.jpg';

const style = {
  transition: 'all 750ms',
  '@media only screen and (maxWidth: 600px)': {
    height: '100px',
    width: '100px',
  },
  '@media only screen and (minWidth: 600px)': {
    height: '200px',
    width: '200px',
  }
};

class ProfilePicture extends Component {
  render() {
    return (
      <div id="avatar" style={{
        display: 'table-cell',
        verticalAlign: 'middle',
        position: 'relative',
        padding: '10px',
      }} >
        <Paper zdepth={3} style={{padding: '5px', borderRadius: '50%', ...style}}>
          <Avatar alt="Fadee Kannah" src={picture} style={{width: '100%', height: '100%', padding: 0, ...style}}/>
        </Paper>
      </div>
    )
  }
}

export default ProfilePicture;
