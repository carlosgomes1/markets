import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as Yup from "yup";

import authConfig from "../config/auth";
import connection from "../database/connection";

class SessionController {
    async create(request: Request, response: Response) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: "Validation fails" });
        }

        const { email: emailBody, password } = request.body;

        const market = await connection("markets")
            .where({
                email: emailBody,
            })
            .first();

        if (!market) {
            return response.status(401).json({ error: "User not found" });
        }

        if (password !== market.password) {
            return response
                .status(400)
                .json({ error: "Password does not match" });
        }

        const { id, name, email } = market;

        return response.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();
