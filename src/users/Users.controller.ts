import { Request, Response } from 'express';
import { User } from "./../entity/Users.entity";
import { getConnection, createConnection, getRepository } from "typeorm";

export default class usersController {

    //private userRepository = getRepository(User);

    async list(req: Request, res: Response):Promise<Response> {

        const users =  {}//await this.userRepository.find();

        console.log(users)
        
        return  res.status(201).json({
            result: {
                status: 'success',
                message: "Liste de tous utilisateurs !",
                users,
            }
        })
    }

    async UsersListAction(req: Request, res: Response) {
        return await getConnection().getRepository(User).find();
    }
    
}
