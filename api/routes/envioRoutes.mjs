import { Router } from "express";
import EnvioController from "../controllers/EnvioController.mjs";

const routerEnvio = Router();

routerEnvio.get("/envio", EnvioController.mostraEnvio);
routerEnvio.get("/envio/:id", EnvioController.mostraUmEnvio);

export default routerEnvio;