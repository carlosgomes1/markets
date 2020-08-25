import { Request, Response } from "express";
import * as Yup from "yup";

import connection from "../database/connection";
import PathToUrl from "../utils/PathToUrl";

class ProductController {
    async indexAllOfMarkets(request: Request, response: Response) {
        const { id } = request.params;

        const products = await connection("products")
            .select(["products.*", "files.id as file_id", "files.path"])
            .from("products")
            .where({ market_id: id })
            .leftJoin("files", "files.product_id", "products.id");

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
        const file = await connection("files")
            .where({ product_id: id })
            .first();

        const url = PathToUrl(file.path);
        const fileWithURL = { ...file, url };

        return response.json({ product, fileWithURL });
    }

    async index(request: Request, response: Response) {
        const products = await connection("products")
            .select(["products.*", "files.id as file_id", "files.path"])
            .from("products")
            .leftJoin("files", "files.product_id", "products.id");

        const filteredProducts = products.map((product) => {
            const url = PathToUrl(product.path);
            return { ...product, url };
        });

        return response.json(filteredProducts);
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

        return response.json({ message: "Ok" });
    }
}

export default new ProductController();
