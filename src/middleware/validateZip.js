const getZoos = require("../utils/getZoos")
function validateZip(req, res, next) {
    const {zip} = req.params
    if (getZoos(zip) && zip.length === 5 && Number(zip)){
        next()
    } else {
        next(`Zip (${zip}) is invalid!`)
    }
}

module.exports = validateZip;