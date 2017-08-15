const restful = require('node-restful')
const mongoose = restful.mongoose

const cycleSchema = new mongoose.Schema({
    name: { type: String },
    release: { type: String },
    createdAt: { type: Date, default: Date.now },
    user_owner: { type: String },
    user_done: { type: String },
})

const specSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    user: { type: String },
    cycles: [cycleSchema]

})

module.exports = restful.model('Spec', specSchema)