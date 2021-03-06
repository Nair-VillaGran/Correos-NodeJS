const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const {PORT} = require("./config.js") 
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/index"));

console.log(__dirname);

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});
    