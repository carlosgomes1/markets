import { Router } from "express";

import MarketController from "./controllers/MarketController";
import ProductController from "./controllers/ProductController";

const routes = Router();

routes.get("/", (request, response) => {
    return response.send("Hello World");
});

export default routes;
