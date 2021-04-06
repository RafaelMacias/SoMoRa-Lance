const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors());
app.use(express.json()); //?para leer los datos quue se estan resiviendo

app.use('/api', require('./routes/index'))


app.use(express.static(__dirname+'/SoMoRa-Lance/dist/somoralancer'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/SoMoRa-Lance/dist/somoralancer/index.html'));
});

app.listen(process.env.PORT || 8080);


// app.listen(3000);
console.log('Servidor en puerto 8080');