const express = require("express")
const { v4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const app = express()
const router = express.Router()
const productsPath = path.join(__dirname, "..", "data", "products.json")

router.get("/admin/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Add product" })
})

router.post("/admin/add-product", (req, res) => {
  const { title, price } = req.body
  const product = {
    id: v4(),
    title,
    price,
  }
  fs.readFile(productsPath, (err, products) => {
    const updatedProducts = [product, ...JSON.parse(products)]
    fs.writeFile(productsPath, JSON.stringify(updatedProducts), () => {
      res.redirect("/")
    })
  })
})
module.exports = router
