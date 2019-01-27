import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import picture from '../../../static/fadee.jpg';
import "./header.css";

class ProfilePicture extends Component {
  render() {
    return (
      <div id="avatar" style={{
        display: 'table-cell',
        verticalAlign: 'middle',
        position: 'relative',
        padding: '10px',
      }} >
        <Paper className='transition profilePicture' zdepth={3} style={{padding: '5px', borderRadius: '50%'}}>
          <Avatar className='transition profilePicture' src={picture} style={{width: '100%', height: '100%', padding: 0}}/>
        </Paper>
      </div>
    )
  }
}

export default ProfilePicture;
