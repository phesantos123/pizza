
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  login: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, login, admin}: IUserRequest) {
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


    const user = usersRepository.create({
      name,
      login,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };