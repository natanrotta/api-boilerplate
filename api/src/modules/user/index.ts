import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  find = async (req: Request, res: Response) => {
    console.log("req.query");
    const user = await prisma.user.findMany();
    return res.json(user);
  };
}

export default new User();
