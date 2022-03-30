const express = require("express");
app = express()

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

require('dotenv').config()













const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT: ${port}`);
  });