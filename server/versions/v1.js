const v1 = require('express')()

v1.get('/app/data', (req, res) => {
    console.log('get data on version 1')
    res.status(200).send('v1 sub-app');
})

module.exports = v1