var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({
    name: String,
    image: {}
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
