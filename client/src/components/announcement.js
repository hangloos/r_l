import React from 'react';
import './announcement.css';
export default class Announcement extends React.Component {


render() {
    return (
        <div className={this.props.winner || this.props.fullBoard ? 'visible' : 'hidden'}>
          <h1>Game Over</h1>
        </div>    
      )
  }
}