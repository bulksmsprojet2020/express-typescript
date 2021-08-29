"use strict";
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
const Users_entity_1 = require("./../entity/Users.entity");
const typeorm_1 = require("typeorm");
class usersController {
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.createConnection)();
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepo = (0, typeorm_1.getConnection)().getRepository(Users_entity_1.User);
            const users = yield userRepo.find();
            console.log(users);
            return res.status(201).json({
                result: {
                    status: 'success',
                    message: "Liste de tous utilisateurs !",
                    users,
                }
            });
        });
    }
    UsersListAction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getConnection)().getRepository(Users_entity_1.User).find();
        });
    }
}
exports.default = usersController;
//# sourceMappingURL=Users.controller.js.map