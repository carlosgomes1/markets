import { Request, Response } from "express";
import * as Yup from "yup";

import connection from "../database/connection";

class MarketController {
    async create(request: Request, response: Response) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            whatsapp: Yup.number().required(),
            address: Yup.string().required(),
            address_number: Yup.number().required(),
            address_complement: Yup.string(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: "Validation fails" });
        }

        const userExists = await connection("markets").first().where({
            email: request.body.email,
        });

        if (userExists) {
            return response.status(400).json({ error: "User already exists" });
        }

        await connection("markets").insert(request.body);

        return response.json({ message: "User created!" });
    }
}

export default new MarketController();
