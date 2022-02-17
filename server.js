const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080
app.use(express.static(__dirname + '/dist/heroku-deploy'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/heroku-deploy/index.html'));});
app.set("port", PORT);