const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (request, response, next) => {
  console.log(request.body);
  products.push({ title: request.body.title });
  response.redirect("/");
});

exports.routes = router;
exports.products = products;
