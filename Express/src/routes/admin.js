const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/admin/add-product", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.use("add-product", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

module.exports = router;
