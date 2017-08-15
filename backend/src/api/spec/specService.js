const Spec = require('./spec')
const errorHandler = require('../common/errorHandler')

Spec.methods(['get', 'post', 'put', 'delete'])
Spec.updateOptions({new: true})
Spec.after('post', errorHandler).after('put', errorHandler)

Spec.route('count', (req, res, next) => {
    Spec.count((error, count) => {
        if(error){
            res.status(500).json({errors: [error]})
        } else {
            res.json({count})
        }
    })
})

Spec.route('countCycles', (req, res, next) => {
    Spec.aggregate({
        $project: {cycles: {$count: "$cycles._id"}}
    }, {
        $group: {_id: null, cycles: {$sum: "$cycles"}}  
    }, {
        $project: {_id: 0, cycles: 1}
    }, (error, result) => {
        if(error){
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {cycles: 0})
        }

    })
})

module.exports = Spec