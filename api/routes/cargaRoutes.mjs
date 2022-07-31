import { Router } from "express";
import CargaController from "../controllers/CargaController.mjs";

const routerCarga = Router();

routerCarga.get("/carga", CargaController.mostraCarga);
routerCarga.get("/carga/:id", CargaController.mostraUmaCarga);

export default routerCarga;