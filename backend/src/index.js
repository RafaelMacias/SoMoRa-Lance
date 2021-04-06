// if (process.env.NODE_ENV !== 'production'){
//     require('dotenv').config();
// }

const express = require('express');
<<<<<<< HEAD
=======
const path = require('path');
const app = express();
>>>>>>> b93c854741295bd0dd32197c22689b9724b8083b
const cors = require('cors');
const path = require('path');

const app = express();
require('./database');

app.use(cors());
app.use(express.json()); //?para leer los datos quue se estan resiviendo

app.use('/api', require('./routes/index'))


<<<<<<< HEAD
app.use(express.static(path.join(__dirname, '/SoMoRa-Lance/dist/somoralancer')))

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});
=======
app.use(express.static(__dirname+'/SoMoRa-Lance/dist/somoralancer'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/SoMoRa-Lance/dist/somoralancer/index.html'));
});

app.listen(process.env.PORT || 8080);


// app.listen(3000);
console.log('Servidor en puerto 8080');
>>>>>>> b93c854741295bd0dd32197c22689b9724b8083b
