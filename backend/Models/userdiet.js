const mongoose = require('mongoose');

const dietSchema = mongoose.Schema({
    morningfood : String,
    eveningfood : String,
    nightfood: String

})

const dietdata =  mongoose.model("userdiets",dietSchema)

module.exports =dietdata


