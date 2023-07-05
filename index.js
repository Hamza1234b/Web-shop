const express = require("express")
const { v4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

const productsPath = path.join(__dirname, "data", "products.json")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views", "includes"))

const productsRoutes = require("./routes/products.routes")
const adminRoutes = require("./routes/admin.routes")
const cartRoutes = require("./routes/cart.routes")
const errorControllers = require("./controllers/error.controllers")
app.use(productsRoutes)
app.use(adminRoutes)
app.use(cartRoutes)

app.get("*", errorControllers.get404 )

app.listen(3000)
