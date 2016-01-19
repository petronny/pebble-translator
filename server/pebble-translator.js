var express = require('express');
var app = express();

var port = 8123;

app.get('/get', function(req, res) {
	console.log('Get endpoint');
	var query = req.query.q;
	console.log('Got query ' + query);
	var spawn = require("child_process").spawn;	
	var process = spawn('python', ["pebble-translator.py", query]);
	process.stdout.on('data', function(data) {
		console.log("[pebble-translator.py stdout] " + data.toString());
		res.send(data);
	});
	process.stderr.on('data', function(data) {
//		console.log("[pebble-translator.py stderr] " + data.toString());
	});
});

app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});
