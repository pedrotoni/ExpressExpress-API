import { Router } from "express";
import EnvioController from "../controllers/EnvioController.mjs";

const routerEnvio = Router();

routerEnvio.get("/envio", EnvioController.mostraEnvio);
routerEnvio.get("/envio/:id", EnvioController.mostraUmEnvio);
routerEnvio.post("/envio", EnvioController.criaEnvio);
routerEnvio.put("/envio/:id", EnvioController.atualizaEnvio);
routerEnvio.delete("/envio/:id", EnvioController.deletaEnvio);

export default routerEnvio;