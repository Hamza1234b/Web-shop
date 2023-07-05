exports.get404 = (req, res) => {
    const error = { message: "Not Found" }
    res.render("error", { pageTitle: error.title,path:"*", error })
  }