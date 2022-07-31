import { Router } from "express";
import CargaController from "../controllers/CargaController.mjs";

const routerCarga = Router();

routerCarga.get("/carga", CargaController.mostraCarga);

export default routerCarga;