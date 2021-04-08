const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
require('./database');

app.use(cors());
app.use(express.json()); //?para leer los datos quue se estan resiviendo

app.use('/api', require('./routes/index'))


app.listen(3000);
console.log('Servidor en puerto 3000');
