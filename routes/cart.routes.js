const express = require("express")


const router = express.Router()

router.get("/cart", (req, res) => {
    res.render("cart", {
      pageTitle: "Cart",
      path: "/cart",
     
    })

})

module.exports = router
