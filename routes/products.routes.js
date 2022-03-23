const router = require("express").Router()
const { readJSONFile } = require("../utils/fs.utils")


router.get('/allProducts', (req, res) => {
    const allProducts = readJSONFile()
    res.send(allProducts)
})


router.get('/product/:productId', (req, res) => {
    const allProducts = readJSONFile()

    const { productId } = req.params
    const foundProduct = allProducts.find(product => product.id == productId)

    res.send(foundProduct)
})


router.get('/category/:categoryName', (req, res) => {
    const allProducts = readJSONFile()

    const { categoryName } = req.params
    const foundProducts = allProducts.filter(product => product.category == categoryName)

    res.send(foundProducts)
})


router.get('/allProducts/:categoryName', (req, res) => {
    const allProducts = readJSONFile()

    const { categoryName } = req.params
    const foundProducts = allProducts.filter(product => product.category == categoryName)

    res.send(foundProducts)
})


module.exports = router