import { Router } from "express";
import ComercianteController from "../controllers/ComercianteController.mjs";

const routerComerciante = Router();

routerComerciante.get("/comerciante", ComercianteController.mostraComerciante);

routerComerciante.get("/comerciante/:id", ComercianteController.mostraUmComerciante);

routerComerciante.post("/comerciante", ComercianteController.criaComerciante);

routerComerciante.put("/comerciante/:id", ComercianteController.atualizaComerciante);


export default routerComerciante;
