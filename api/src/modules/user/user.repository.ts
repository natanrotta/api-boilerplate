import { PrismaClient } from "@prisma/client";
import { IUser } from "./user.model";

const prisma = new PrismaClient();

export class UserRepository {
  public async findMany(): Promise<IUser[]> {
    return prisma.user.findMany({
      select: {
        id: true,
        url: true,
        name: true,
        email: true,
        password: true,
        created_at: true,
        updated_at: true,
      },
    });
  }
}
