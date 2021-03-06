import {Request, Response} from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response){
        const {name,login,password,admin} = request.body

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, login,password, admin})

            return response.json(user);

    }
}

export {CreateUserController}