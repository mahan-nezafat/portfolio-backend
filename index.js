"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require("dotenv/config");
var app = express();
var port = process.env.PORT;
app.listen(port, function () { return console.log("server running on port ".concat(port)); });
