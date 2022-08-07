const express = require("express");
const path = require("path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  console.log(adminData.products);
});

module.exports = router;
