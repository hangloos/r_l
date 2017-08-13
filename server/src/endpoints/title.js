export default function(app) {
	app.get('/api/title', function(req, res) {
		res.setHeader('Content-Type', 'application/json');
		res.send({
			title: 'TTTaaS',
      player: 'X'
		});
	});
}