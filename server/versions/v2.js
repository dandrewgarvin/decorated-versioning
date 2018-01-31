const v2 = require('express')()

v2.get('/app/data', (req, res) => {
    console.log('get data on version 2')
    res.status(200).send('v2 sub-app');
})

module.exports = v2