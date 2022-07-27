const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const titles = [];
app.get("/", (request, response) => {
  return response.json(titles);
});
app.post("/", (request, response) => {
  const { title } = request.body;

  if (!title) {
    response.status(404).send("Title is required");
    return;
  }

  titles.push(title);
  return response.status(200).json({ title });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
