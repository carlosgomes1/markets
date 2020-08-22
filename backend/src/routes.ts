import { Router } from "express";

import authMiddleware from "./middlewares/auth";

import MarketController from "./controllers/MarketController";
import ProductController from "./controllers/ProductController";

const routes = Router();

routes.post("/users", MarketController.create);

routes.use(authMiddleware);

export default routes;
