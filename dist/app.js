"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//My modules
const error_middleware_1 = require("./middleware/error.middleware");
const not_found_middleware_1 = require("./middleware/not-found.middleware");
const users_1 = __importDefault(require("./users"));
const port = process.env.PORT_APP;
const endpoit = '/api';
//Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(`${endpoit}/users`, users_1.default);
//Hendler errors Middleware
app.use(error_middleware_1.errorHandler);
app.use(not_found_middleware_1.notFoundHandler);
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=app.js.map