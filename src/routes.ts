import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const createUserController = new CreateUserController();
const createProductController = new CreateProductController();
const routes = Router();

routes.post("/users",createUserController.handle); 
routes.post("/products",ensureAdmin,createProductController.handle);

export {routes}