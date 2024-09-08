"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require("dotenv/config");
var morgan = require("morgan");
var helmet_1 = require("helmet");
var app = express();
var port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((0, helmet_1.default)());
app.get('/', function (req, res) {
    return res.status(200).json({
        success: true,
        message: 'response ok'
    });
});
app.listen(port, function () { return console.log("server running on port ".concat(port)); });
