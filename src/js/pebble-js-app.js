var xhrRequest = function(url, type, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		callback(this.responseText);
	};
	xhr.open(type, url);
	xhr.send();
};

var getTranslation = function(query) {

	query = JSON.parse(query)['query']
	console.log("query:" + query);
	url = 'http://192.168.1.10:8123/get?q=' + encodeURIComponent(query);

	xhrRequest(url, 'GET',
		function(responseText) {

			// Assemble dictionary using our keys
			var dictionary = {
				"query": query,
				"steps": responseText+'`'
			};

			// Send to Pebble
			Pebble.sendAppMessage(dictionary,
				function(e) {
					console.log("Info sent to Pebble successfully!");
				},
				function(e) {
					console.log("Error info to Pebble!");
				}
			);
		}
	);
};

Pebble.addEventListener('appmessage',
	function(e) {
		console.log("AppMessage received! Got " + JSON.stringify(e.payload));
		getTranslation(JSON.stringify(e.payload));
	}
);
