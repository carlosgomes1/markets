import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../config/auth";

const authMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ error: "Token not provided" });
    }

    const [, token] = authHeader.split(" ");

    try {
        await promisify(jwt.verify)(token, authConfig.secret);

        return next();
    } catch (error) {
        return response.status(401).json({ error: "Token invalid" });
    }
};

export default authMiddleware;
