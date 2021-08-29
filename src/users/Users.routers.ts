import { Router } from "express";

import UsersController from "./Users.controller";

const router = Router();
const users = new UsersController;

//router.post('/', users.add);
router.get('/', users.list);
router.get('/test', users.UsersListAction);

export default router;