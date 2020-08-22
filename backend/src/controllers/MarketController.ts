import { Request, Response } from "express";
import * as Yup from "yup";

import connection from "../database/connection";

interface Market {
    id: number;
    name: string;
    email: string;
    password: string;
    whatsapp: string;
    address: string;
    address_number: string;
    address_complement: string;
}

class MarketController {
    async delete(request: Request, response: Response) {}

    async update(request: Request, response: Response) {}

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const market = await connection("markets").where({ id }).first();

        return response.json(market);
    }

    async index(request: Request, response: Response) {
        const markets = await connection("markets");

        const marketsFiltered = markets.filter((market: Market) => {
            const newMarkets = delete market.password;
            return newMarkets;
        });

        return response.json(marketsFiltered);
    }

    async create(request: Request, response: Response) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            whatsapp: Yup.string().required(),
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
