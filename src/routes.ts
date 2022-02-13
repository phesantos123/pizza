import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateUserController } from "./controllers/CreateUserController";


const createUserController = new CreateUserController();
const createProductController = new CreateProductController();
const routes = Router();

routes.post("/users",createUserController.handle); 
routes.post("/products",createProductController.handle);

export {routes}