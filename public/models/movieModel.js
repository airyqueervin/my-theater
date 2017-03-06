var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({
    name: String,
    image: {}
});

var Photo = mongoose.model('Phto', photoSchema);

module.exports = Photo;
