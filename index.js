const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000

//Routing
app.use(express.static('client'))

 //Run server
 http.listen(port, function() {
	console.log('listening on *:'+port);
 });
