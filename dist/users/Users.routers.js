"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_controller_1 = __importDefault(require("./Users.controller"));
const router = (0, express_1.Router)();
const users = new Users_controller_1.default;
//router.post('/', users.add);
router.get('/', users.list);
router.get('/test', users.UsersListAction);
exports.default = router;
//# sourceMappingURL=Users.routers.js.map