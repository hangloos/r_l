import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';

import './app.css';
import Game from './components/game';
import Home from './components/home';

var uuid = require('uuid');

var firebase = require('firebase');


  // var config = {
  //   apiKey: "AIzaSyD2GQaZJySjzHUceW0m7jFmzNFocQuuXck",
  //   authDomain: "tic-tac-toe-af5ed.firebaseapp.com",
  //   databaseURL: "https://tic-tac-toe-af5ed.firebaseio.com",
  //   projectId: "tic-tac-toe-af5ed",
  //   storageBucket: "tic-tac-toe-af5ed.appspot.com",
  //   messagingSenderId: "133604893145"
  // };
  // firebase.initializeApp(config);

class App extends React.Component {
  state = {
    title: ''
  };

	constructor(...args) {
		super(...args);

		this.startGame = this.startGame.bind(this);
	}

  async componentWillMount() {
    console.log(this.updateTitle())
    // this.setState({title: await this.updateTitle(),
    // 	player: await this.updatePlayer()});
  }

  // here is my node api structure 
  async updateTitle() {
    fetch('http://localhost:3001/api/title').then(res => console.log(res))
	}

	async updatePlayer() {
		// const response = await fetch('http://localhost:3001/api/title').then(console.log(res.json()));
	}
		
	startGame() {
		var test;
		//todo: actually get it to start a game...
		// const game_id = uuid.v1();
		// firebase.database().ref('games/' + game_id).set({
		// 	test: 4
		// })

		const response = fetch('http://localhost:3001/api/game', {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
    		'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(res => window.location.href= `/game/${res.id}`);

	}

	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<div className="app-header">

						<a className="white-link" href="/">{this.state.title}</a>

						<div className="app-buttons">
							<a onClick={this.startGame}>
								Start Game
							</a>
						</div>
					</div>
					
					<Route 
						path='/' 
						exact
						render={() => {
							return <Home />
						}}
					/>

					<Route 
						path='/game/:game_id' 
						render={(props) => {
							//contains game_id
							const params = props.match.params;


							return <Game  reset={this.startGame} {...params}/>
						}}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
