const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/specfy')

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório."