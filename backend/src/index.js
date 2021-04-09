const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
require('./database');

app.use(cors());
app.use(express.json()); //?para leer los datos quue se estan resiviendo

app.use('/api', require('./routes/index'))


app.set('port', process.env.PORT || 8080);

// app.listen(process.env.PORT || 8080);
console.log('Servidor en el puerto 8080');
