//Install express server
const express = require('express');
const path = require('path');

const app = express();

require('../../backend/src/index')

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/somoralancer'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/somoralancer/index.html'));
});


// if (process.env.NODE_ENV !== 'production'){
//     require('dotenv').config(); //*asigna a la variables de entorno
//     //console.log(process.env.NODE_ENV)

// }

// const app = require('./server');
// require('./database');

// app.listen(app.get('port'), () =>{ //?Iniciando Servidor
//     console.log('Servidor en el puerto:', app.get('port'))
// })



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
