import React from 'react';
import './save-button.css';

export default class SaveButton extends React.Component {

render() {
    return (
      <button className="button-style" onClick={this.props.save}>Save Game</button>
      )
  }
}