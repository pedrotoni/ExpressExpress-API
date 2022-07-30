import bodyParser from "body-parser"
import routerCliente from "./clienteRoutes.mjs"

const routes = (app) => {
    app.use(bodyParser.json());
    app.use(routerCliente);
}

export default routes