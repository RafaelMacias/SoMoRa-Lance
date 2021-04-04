const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/somoralancedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(db => console.log('base Conectada'))
    .catch(err => console.log(err));
