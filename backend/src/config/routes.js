const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const Spec = require('../api/spec/specService')
    Spec.register(router, '/specs')
}