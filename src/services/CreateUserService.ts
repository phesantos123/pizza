
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import {hash} from "bcryptjs"
interface IUserRequest {
  name: string;
  login: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, login, admin,password}: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);


    if (!login) {
      throw new Error("login incorrect");
    }


    const userAlreadyExists = await usersRepository.findOne({
      login,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password,8)
    const user = usersRepository.create({
      name,
      login,
      password:passwordHash,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export {CreateUserService}