import express from "express";
import routes from "./routes/index.mjs";
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express();

const port = 3000;

routes(app);

app.listen(port, () =>
  console.log(`\n-.-*-.-*-.-*-.-<<< MARCHA EXPRESS >>>-.-*-.-*-.-*-.-
     Servidor rodando na porta de número ${port}.`)
);

export default app;
