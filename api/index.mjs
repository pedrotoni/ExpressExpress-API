import express from "express";
import routes from "./routes/index.mjs";

const app = express();

const port = 3000;

routes(app);

app.listen(port, () =>
  console.log(`Servidor rodando na porta de número ${port}`)
);

export default app;
