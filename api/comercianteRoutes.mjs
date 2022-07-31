import { Router } from "express";
import  ComercianteController from "../controllers/ComercianteController.mjs";

const routerComerciante = Router();

routerComerciante.get("/comerciante", ComercianteController.mostraComerciante);

routerComerciante.get("/comerciante/:id", ComercianteController.mostraUmComerciante);



export default routerComerciante;
