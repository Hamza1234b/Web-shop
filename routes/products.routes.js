const express = require("express")
const { v4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const productsPath = path.join(__dirname, "..", "data", "products.json")

const router = express.Router()
const productsControllers = require("../controllers/products.controllers")
router.get("/", (req, res) => res.redirect("/products"))
router.get("/products", productsControllers.getProducts )
router.get("/products/:id", productsControllers.getProduct )
module.exports = router
