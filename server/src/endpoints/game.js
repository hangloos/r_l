var uuid = require('uuid');

var firebase = require('firebase');


  var config = {
    apiKey: "AIzaSyD2GQaZJySjzHUceW0m7jFmzNFocQuuXck",
    authDomain: "tic-tac-toe-af5ed.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-af5ed.firebaseio.com",
    projectId: "tic-tac-toe-af5ed",
    storageBucket: "tic-tac-toe-af5ed.appspot.com",
    messagingSenderId: "133604893145"
  };
  firebase.initializeApp(config);

export default function(app) {
	app.post('/api/game', function(req, res) {
		//start a game?
		let game_obj = {
			id: uuid.v1()
		}

		firebase.database().ref('/games/' + game_obj.id).set({
			id: game_obj.id
		});

		res.send({
			id: game_obj.id
		});
	});

	app.get('/api/game/:game_id', function(req, res) {
		
    var dataFirebase = firebase.database().ref('/games/' + game_id)

    dataFirebase.on('value', function(datasnapshot) {
      console.log(datasnapshot);
    })

    res.send({
			size: 3,
			board: 'somedatastructure',
			etc: true
		});
	});


  app.get('/api/games', function(req, res) {
     var firebaseAll = firebase.database().ref()
     firebaseAll.on("value", function(snapshot) {
      res.send(snapshot)
     }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code)
     });
    // res.send({
    //   data: firebaseAll
    // })
  })


}