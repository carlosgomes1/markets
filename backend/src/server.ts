import cors from "cors";
import express from "express";

import routes from "./routes";

declare global {
    namespace Express {
        interface Request {
            userId: number;
        }
    }
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
