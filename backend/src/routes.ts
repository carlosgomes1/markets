import { Router } from "express";

import authMiddleware from "./middlewares/auth";

import MarketController from "./controllers/MarketController";
import ProductController from "./controllers/ProductController";

const routes = Router();

routes.use(authMiddleware);

routes.get("/", (request, response) => {
    return response.send("Hello World");
});

export default routes;
