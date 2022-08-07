const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminData = require("./src/routes/admin");
const shopRoutes = require("./src/routes/shop");

const app = express();
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "src", "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((request, response, next) => {
  response
    .status(404)
    .sendFile(path.join(__dirname, "src", "views", "404.html"));
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
