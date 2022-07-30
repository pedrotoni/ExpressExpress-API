import { Router } from "express";
import ClienteController from "../controllers/ClienteController.mjs";

const routerCliente = Router();
routerCliente.get("/cliente", ClienteController.mostraCliente);

routerCliente.get("/cliente/:id", ClienteController.mostraUmCliente);

export default routerCliente;
