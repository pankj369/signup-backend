const express = require("exoress");
const mysql = require("mysql");
const cors = require("cors");


const app= express();
app.use(cors());


const db= mysql.createConnection({
  host: "127.0.0.1:3606",
  user: "root",
  password: "your_password",
  database: "signup"
});

