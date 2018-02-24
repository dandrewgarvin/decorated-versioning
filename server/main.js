const app = require('express')()
    , chalk = require('chalk')
    , port = 3005
    , setup = require('./decorations/setup')
    , v1 = require('./versions/v1')
    , v2 = require('./versions/v2')

// ===== APP INITIALIZATION ===== //

setup(app)

// ===== API ENDPOINTS ===== //

app.use('/api/v1', v1)
app.use('/api/v2', v2)

app.listen(port, _=> console.log(`listening on port ${chalk.cyan(port)}`))