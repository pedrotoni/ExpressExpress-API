import { Router } from "express";
import CargaController from "../controllers/CargaController.mjs";

const routerCarga = Router();

routerCarga.get("/carga", CargaController.mostraCarga);
routerCarga.get("/carga/:id", CargaController.mostraUmaCarga);
routerCarga.post("/carga", CargaController.criaCarga);
routerCarga.put("/carga/:id", CargaController.atualizaCarga);

export default routerCarga;