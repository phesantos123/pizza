import {Request, Response} from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {

    async handle(request: Request, response: Response){
        const {name,price,description} = request.body

        const createProductService = new CreateProductService();
        
        const user = await createProductService.execute({name,price,description})

            return response.json(user);

    }
}

export {CreateProductController}