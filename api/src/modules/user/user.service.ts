import { UserRepository } from "./user.repository";
import { IUser } from "./user.model";

const userRepository = new UserRepository();

export class UserService {
  public async findUsers(): Promise<IUser[]> {
    const users = await userRepository.findMany();
    return users;
  }
}
