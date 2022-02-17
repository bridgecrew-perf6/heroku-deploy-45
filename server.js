const express = require('express');
const PORT = process.env.PORT || 5000
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/dist/heroku-deploy'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/heroku-deploy/index.html'));});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))