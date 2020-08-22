import { Router } from "express";

import authMiddleware from "./middlewares/auth";

import MarketController from "./controllers/MarketController";
import SessionController from "./controllers/SessionController";
import ProductController from "./controllers/ProductController";

const routes = Router();

routes.post("/markets", MarketController.create);
routes.get("/markets", MarketController.index);
routes.get("/markets/:id", MarketController.show);

routes.use(authMiddleware);

routes.delete("/markets/:id", MarketController.delete);
routes.put("/markets/:id", MarketController.update);

export default routes;
