import { Router } from "express";
import  ComercianteController from "../controllers/ComercianteController.mjs";

const routerComerciante = Router();

routerComerciante.get("/comerciante", ComercianteController.mostraComerciante);


export default routerComerciante;
