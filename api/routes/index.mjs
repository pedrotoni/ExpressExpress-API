import bodyParser from "body-parser"
import routerCliente from "./clienteRoutes.mjs"
import routerEnvio from "./envioRoutes.mjs";

const routes = (app) => {
    app.use(bodyParser.json());
    app.use(routerCliente);
    app.use(routerEnvio)
}

export default routes