import React from 'react';
import './reset.css';

export default class Reset extends React.Component {

  async componentWillReceiveProps() {
    const {} = this.props;

  }

render() {
    return (
      <button className="button-style-reset" onClick={this.props.resetGame}>New Game</button>
      )
  }
}