// if (process.env.NODE_ENV !== 'production'){
//     require('dotenv').config();
// }

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
require('./database');

app.use(cors());
app.use(express.json()); //?para leer los datos quue se estan resiviendo

app.use('/api', require('./routes/index'))


app.use(express.static(path.join(__dirname, '/SoMoRa-Lance/dist/somoralancer')))

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});