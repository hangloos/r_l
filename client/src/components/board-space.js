import React from 'react';
import PropTypes from 'prop-types';

import './board-space.css';

export default class BoardSpace extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		onClick: PropTypes.func.isRequired,
		
	};

	static defaultProps = {
		value: ' '
	}

	handleClick() {
		this.props.onClick(this.props.className);
	}

	render() {
		return (
			<div className={`board_space ${this.props.className}`}  onClick={this.handleClick.bind(this)}>
				<span>{this.props.value}</span>
			</div>
		);
	}
}