const express = require("express")
const { v4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const app = express()
const router = express.Router()
const productsPath = path.join(__dirname, "..", "data", "products.json")

router.get("/admin/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Add product", path:"/admin/add-product" })
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
router.get("/admin/products", (req, res) => {
  fs.readFile(productsPath, (err, products) => {
    res.render("admin-products", {
      pageTitle: "Admin Products",
      path: "/admin/products",
      products: JSON.parse(products),
    })})})

router.get("/admin/orders", (req, res) => {
 res.render("orders", {
      pageTitle: "Orders",
      path: "/admin/orders",
     
    })})
    

module.exports = router
