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

app.use(productsRoutes)
app.use(adminRoutes)
app.use(cartRoutes)

app.get("*", (req, res) => {
  const error = { message: "Not Found" }
  res.render("error", { pageTitle: error.title,path:"*", error })
})

app.listen(3000)
