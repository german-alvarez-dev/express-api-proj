const fs = require("fs")

function readJSONFile() {
    return JSON.parse(fs.readFileSync("products.json"))
}

module.exports = { readJSONFile }