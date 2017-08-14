import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends React.Component {

  state = {
  }

  constructor(...args) {
    super(...args);
    this.state = {
      allGames: {}
    }

  }

  // getGames() {
  //   console.log(this.state.data)
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({
      allGames: nextProps.allGames
    });
  }
  // async updateData() {
  //   axios.get('http://localhost:3001/api/games')
  //   .then((result) => {
  //     console.log(result.data.games, '====');
  //   });
  //   // const response = await fetch('http://localhost:3001/api/games').then(res => res.json()).then(function(x) {
  //   //   // console.log(x)
  //   //   // debugger
  //   // })
  //   // return response
  // }

  render() {
    console.log(this.state.allGames)
    // const games = this.state.allGames.map(function(item) {
    //   return (
    //     <li key="{item.id}">
    //     {item}
    //     </li>
    //     );
    // })
    return (
    <div className="games-list">
      
    </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    allGames: state.allGames
  };
}
export default connect(mapStateToProps)(Home);