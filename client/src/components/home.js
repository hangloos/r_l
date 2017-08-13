import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {

  state = {
  }

  constructor(...args) {
    super(...args);

  }

  async componentDidMount() {
    this.setState({
      data: this.updateData()
    })
  }

  async updateData() {
    const response = await fetch('http://localhost:3001/api/games').then(res => res.json()).then(function(x) {
      console.log(x)
      debugger
    })
    return response
  }

  getGames() {
    console.log(this.state.data)
  }





  render() {
    return (
    <div className="games-list">
    <button onClick={this.getGames.bind(this)}>Get Games</button>
    </div>
    )
  }
}