const { v4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const productsPath = path.join(__dirname, "..", "data", "products.json")
const Product = require("../models/Product")


exports.getAddProduct = (req, res) => {
    res.render("add-product", { 
     pageTitle: "Add product", 
     path:"/admin/add-product" })
  }

exports.postAddProduct =  (req, res) => {
    const { title, price } = req.body
    
    const product = new Product (title,price)
    product.save()
    res.redirect("/products")
  }

  exports.getProducts = (req, res) => {
    const products = Product.fetchAll()
      res.render("admin-products", {
        pageTitle: "Admin Products",
        path: "/admin/products",
        products: products
      })}

exports.getOrders =  (req, res) => {
    res.render("orders", {
         pageTitle: "Orders",
         path: "/admin/orders",
        
       })}