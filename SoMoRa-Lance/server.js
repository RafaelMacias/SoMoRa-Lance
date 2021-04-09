//Install express server
const express = require('express');
const path = require('path');

const app = express();

require('../backend/src/index')

// Serve only the static files form the dist directory
app.use(express.static('./dist/somoralancer'));


app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/somoralancer/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

