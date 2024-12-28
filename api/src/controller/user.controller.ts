import { Request, Response } from "express";
import { UserService } from "../modules/user/user.service";

const userService = new UserService();

class UserController {
  public async find(req: Request, res: Response) {
    try {
      const users = await userService.findUsers();
      return res.status(200).json({
        success: true,
        message: "Found users",
        payload: { users },
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || "Error finding users",
      });
    }
  }
}

export default new UserController();
