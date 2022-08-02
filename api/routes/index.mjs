import bodyParser from "body-parser"
import routerCliente from "./clienteRoutes.mjs"

import routerComerciante from "./comercianteRoutes.mjs"
import routerCarga from "./cargaRoutes.mjs"

const routes = (app) => {
    app.use(bodyParser.json());
    app.use(routerCliente);
    app.use(routerComerciante);
    app.use(routerCarga);
}

export default routes