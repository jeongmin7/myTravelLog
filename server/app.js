const fs = require("fs"); //파일 읽고 쓰려면 필요
const path = require("path");

const express = require("express");
const { send } = require("process");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Home</h1>");
});

app.get("/add", function (req, res) {
  res.send("<h1>add</h1>");
});
app.get("/detail", function (req, res) {
  res.send("<h1>detail</h1>");
});
app.get("/edit", function (req, res) {
  res.send("<h1>edit</h1>");
});
app.get("/error", function (req, res) {
  res.send("<h1>error</h1>");
});
app.get("/signin", function (req, res) {
  res.send("<h1>Signin</h1>");
});
app.listen(3001);
