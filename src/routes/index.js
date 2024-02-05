const courseRoute  = require('./courseRoute')
const siteRoute = require('./siteRoute')
const meRoute = require('./meRoute')

function route(app){
    app.use('/me', meRoute )
    app.use('/courses',courseRoute);
    app.use('/', siteRoute);
}
module.exports = route