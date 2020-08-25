import { Request, Response } from "express";

import connection from "../database/connection";

class FileController {
    async productFile(request: Request, response: Response) {
        const { originalname: name, filename: path } = request.file;

        await connection("files").insert({
            name,
            path,
            product_id: request.headers.product_id,
        });

        return response.json({ message: "Complete file upload" });
    }

    async avatarFile(request: Request, response: Response) {
        const { originalname: name, filename: path } = request.file;

        await connection("avatar").insert({
            name,
            path,
            market_id: request.marketId,
        });

        return response.json({ message: "Complete file upload" });
    }
}

export default new FileController();
