
import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../repositories/ProductRepositories";

interface IProductRequest {
  name: string;
  price: number;
  description?:string;
}

class CreateProductService {
  async execute({ name, price, description}: IProductRequest) {
    const productRepositories = getCustomRepository(ProductRepositories);


    if (!name) {
      throw new Error("Incorrect");
    }

    const productAlreadyExists = await productRepositories.findOne({
      name,
    });

    if (productAlreadyExists) {
      throw new Error("name already exists");
    }


    const product = productRepositories.create({
      name,
      price,
      description
    });

    await productRepositories.save(product);

    return product;
  }
}

export {CreateProductService}