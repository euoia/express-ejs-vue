const express = require("express");
const path = require("path");
const expressRequestLogger = require("./lib/express-request-logger.js");
const viewHelpers = require("./lib/view-helpers.js");

const app = express();
app.set("view engine", "ejs");
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use(expressRequestLogger);
app.locals = viewHelpers;

app.get('/', (req, res) => {
  return res.render("index");
});

app.listen(8080)
console.log(`Listing on port 8080`);
