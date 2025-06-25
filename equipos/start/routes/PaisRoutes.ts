import Router from "@adonisjs/core/services/router";
import PaisController from "../../app/controller/PaisController.js";

const pais = new PaisController()

Router.post('/crearPais', pais.crearPais);
Router.get('/listarPais', pais.listarpais);
Router.get('/listar/:codpais', pais.listraId);
Router.put('/pais/:codpais', pais.actualizarPais);

