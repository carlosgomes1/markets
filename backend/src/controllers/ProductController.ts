import { Request, Response } from "express";
import * as Yup from "yup";

import connection from "../database/connection";

class ProductController {
    async indexAllOfMarkets(request: Request, response: Response) {
        const { id } = request.params;

        const products = await connection("products").where({
            market_id: id,
        });

        return response.json(products);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await connection("products").where({ id }).delete();

        return response.json({ message: "Product successfully deleted" });
    }

    async update(request: Request, response: Response) {
        const schema = Yup.object().shape({
            old_price: Yup.number().notRequired(),
            new_price: Yup.number().notRequired(),
            name: Yup.string().notRequired(),
            description: Yup.string().notRequired(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: "Validation fails" });
        }

        const { id } = request.params;

        await connection("products").where({ id }).update(request.body);

        return response.json({ message: "Product successfully changed" });
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const product = await connection("products").where({ id }).first();

        return response.json(product);
    }

    async index(request: Request, response: Response) {
        const products = await connection("products");

        return response.json(products);
    }

    async create(request: Request, response: Response) {
        const schema = Yup.object().shape({
            old_price: Yup.number().required(),
            new_price: Yup.number().required(),
            name: Yup.string().required(),
            description: Yup.string(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: "Validation fails" });
        }

        const { old_price, new_price, name, description = "" } = request.body;

        await connection("products").insert({
            old_price,
            new_price,
            name,
            description,
            market_id: request.marketId,
        });

        return response.json({ message: "Product successfully registered" });
    }
}

export default new ProductController();
