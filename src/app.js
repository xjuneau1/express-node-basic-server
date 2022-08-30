const morgan = require("morgan")
const validateZip = require("./middleware/validateZip")
const express = require("express")
const app = express()

module.exports = app

//App level middleware
app.use(morgan('dev'))

//Routes
app.get('/check/:zip', validateZip)
app.get('/zoos/:zip', validateZip, (req,res,next) => {

})

//Error handling
app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist.`)
})
app.use((err, req, res, next) => {
    console.error(err)
    res.send(err)
})