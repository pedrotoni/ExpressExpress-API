import { Router } from "express";
import ClienteController from "../controllers/ClienteController.mjs";

const routerCliente = Router();

routerCliente.get("/cliente", ClienteController.mostraCliente);
routerCliente.get("/cliente/:id", ClienteController.mostraUmCliente);
routerCliente.post("/cliente", ClienteController.criaCliente);
routerCliente.put("/cliente/:id", ClienteController.atualizaCliente);
routerCliente.delete("/cliente/:id", ClienteController.deletaCliente);

export default routerCliente;
