"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const typeorm_1 = require("typeorm");
const _1 = require("./");
// create typeorm connection
(0, typeorm_1.createConnection)().then(connection => {
    const userRepository = connection.getRepository(_1.User);
    // create and setup express app
    const app = express();
    app.use(express.json());
    // register routes
    app.get("/users", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userRepository.find();
            res.json(users);
        });
    });
    app.get("/users/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield userRepository.findOne(req.params.id);
            return res.send(results);
        });
    });
    app.post("/users", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userRepository.create(req.body);
            const results = yield userRepository.save(user);
            return res.send(results);
        });
    });
    app.put("/users/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userRepository.findOne(req.params.id);
            userRepository.merge(user, req.body);
            const results = yield userRepository.save(user);
            return res.send(results);
        });
    });
    app.delete("/users/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield userRepository.delete(req.params.id);
            return res.send(results);
        });
    });
    // start express server
    app.listen(3000);
});
//# sourceMappingURL=test.js.map