import { Router } from "express";
import ClienteController from "../controllers/ClienteController.mjs";

const routerCliente = Router();
routerCliente.get("/cliente", ClienteController.mostraCliente);

export default routerCliente;
