import { Router } from "express";

import authMiddleware from "./middlewares/auth";

import MarketController from "./controllers/MarketController";
import SessionController from "./controllers/SessionController";
import ProductController from "./controllers/ProductController";

const routes = Router();

routes.post("/markets", MarketController.create);
routes.get("/markets", MarketController.index);
routes.get("/markets/:id", MarketController.show);

routes.post("/session", SessionController.create);

routes.use(authMiddleware);

routes.delete("/markets", MarketController.delete);
routes.put("/markets", MarketController.update);

export default routes;
