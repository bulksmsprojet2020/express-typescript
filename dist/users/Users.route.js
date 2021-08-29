"use strict";
// var express = require('express')
// var router = express.Router();
Object.defineProperty(exports, "__esModule", { value: true });
// const usersController = require('./Users.controller');
// router.get('/add', usersController.add);
// module.exports = router;
const express_1 = require("express");
const Users_controller_1 = require("./Users.controller");
const router = (0, express_1.Router)();
router.get('/add', Users_controller_1.usersController.add);
exports.default = router;
//# sourceMappingURL=Users.route.js.map