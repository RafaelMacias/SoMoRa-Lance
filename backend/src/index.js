const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
require('./database');

app.use(cors());
app.use(express.json()); //?para leer los datos quue se estan resiviendo

app.use('/api', require('./routes/index'))


<<<<<<< HEAD
app.listen(3000)
console.log('Servidor en el perto 3000');
=======
app.listen(3000);
console.log('Servidor en puerto 3000');
>>>>>>> e24023bb4124fa0d73ee0c11af9432023130cd8e
