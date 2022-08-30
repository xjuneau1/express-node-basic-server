const getZoos = require("../utils/getZoos")
function validateZip(req, res, next) {
    const {zip} = req.params
    if (getZoos(zip)){
        res.send(`${zip} exists in our records`)
    } else {
        res.send(`${zip} does not exist in our records.`)
    }
    next()
}

module.exports = validateZip;