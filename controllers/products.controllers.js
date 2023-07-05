const { v4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const p = path.join(__dirname, "..", "data", "products.json")

const Product = require("../models/Product")
exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {

    res.render("index", {
    pageTitle: "Web shop",
    path: "/products",
    products: products
    })
  })
}
exports.getProduct = (req, res) => {
    const { id } = req.params
    
    fs.readFile(p, (err, products) => {
      const product = JSON.parse(products).find((product) => product.id === id)
      const error = { message: "Not Found" }
      if (!product) return res.render("error", { pageTitle: error.title, path:"*", error })
  
      res.render("product-detail", {
        pageTitle: product.title,
        path: "/products",
        product 
      })
    })
  }