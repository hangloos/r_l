import React from 'react';
import PropTypes from 'prop-types';

import Board from './board';
import Reset from './reset';

export default class Game extends React.Component {
	static propTypes = {
		game_id: PropTypes.any.isRequired
	};

  async componentWillReceiveProps() {

  }

  handleReset() {
    this.props.reset()
  }

	render() {
		return (
    <div>
    <Board  id={this.props.game_id} length={3}/>
    <Reset resetGame={this.handleReset.bind(this)}/>
    </div>
    )
	}
}
