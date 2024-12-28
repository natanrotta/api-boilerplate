import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token is required",
      payload: { code: 401 },
    });
  }

  const token = authHeader.replace("Bearer", "").trim();

  try {
    const secret = process.env.TOKEN_SECRET as string;
    const payload = jwt.verify(token, secret) as JwtPayload;
    req.user = { user_id: payload.user_id };
    return next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
      payload: { code: 401 },
    });
  }
};

export default authMiddleware;
