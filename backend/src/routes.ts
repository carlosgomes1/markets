import { Router } from "express";
import multer from "multer";

import multerConfig from "./config/multer";

import authMiddleware from "./middlewares/auth";

import MarketController from "./controllers/MarketController";
import SessionController from "./controllers/SessionController";
import ProductController from "./controllers/ProductController";
import FileController from "./controllers/FileController";

const routes = Router();
const upload = multer(multerConfig);

routes.post("/markets", MarketController.create);
routes.get("/markets", MarketController.index);
routes.get("/markets/:id", MarketController.show);

routes.post("/session", SessionController.create);

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.get("/productMarket/:id", ProductController.indexAllOfMarkets);

routes.use(authMiddleware);

routes.delete("/markets", MarketController.delete);
routes.put("/markets", MarketController.update);

routes.post("/products", ProductController.create);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

routes.post("/files", upload.single("file"), FileController.productFile);
routes.post("/avatar", upload.single("file"), FileController.avatarFile);

export default routes;
