const express = require("express")
const { v4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const app = express()

const router = express.Router()
const productsPath = path.join(__dirname, "..", "data", "products.json")
const adminControllers = require("../controllers/admin.controllers")

router.get("/admin/add-product", adminControllers.getAddProduct )

router.post("/admin/add-product", adminControllers.postAddProduct )
router.get("/admin/products", adminControllers.getProducts)

router.get("/admin/orders", adminControllers.getOrders )
    

module.exports = router
