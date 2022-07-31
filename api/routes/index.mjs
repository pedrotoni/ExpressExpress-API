import bodyParser from "body-parser"
import routerCliente from "./clienteRoutes.mjs"
import routerComerciante from "./comercianteRoutes.mjs"

const routes = (app) => {
    app.use(bodyParser.json());
    app.use(routerCliente);
    app.use(routerComerciante);
}

export default routes