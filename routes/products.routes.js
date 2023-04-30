const express = require("express")
const { v4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const app = express()
const productsPath = path.join(__dirname, "..", "data", "products.json")

const router = express.Router()
router.get("/", (req, res) => res.redirect("/products"))
router.get("/products", (req, res) => {
  fs.readFile(productsPath, (err, products) => {
    res.render("index", {
      pageTitle: "Web shop",
      products: JSON.parse(products),
    })
  })
})
router.get("/products/:id", (req, res) => {
  const { id } = req.params
  console.log(id)
  fs.readFile(productsPath, (err, products) => {
    const product = JSON.parse(products).find((product) => product.id === id)
    const error = { message: "Not Found" }
    if (!product) return res.render("error", { pageTitle: error.title, error })

    res.render("product-detail", { pageTitle: product.title, product })
  })
})
module.exports = router
