import cors from "cors";
import express from "express";
import { resolve } from "path";

import routes from "./routes";

declare global {
    namespace Express {
        interface Request {
            marketId: number;
        }
    }
}

const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(resolve(__dirname, "..", "tmp", "uploads")));
app.use(routes);

app.listen(3333);
