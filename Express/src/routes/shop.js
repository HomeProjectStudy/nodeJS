const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
