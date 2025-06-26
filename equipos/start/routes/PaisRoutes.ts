import Router from "@adonisjs/core/services/router";
import PaisController from "../../app/controller/PaisController.js";

const pais = new PaisController()

Router.post('/crearPais', pais.crearPais);
Router.get('/listarPais', pais.listarpais);
Router.get('/listar/:codpais', pais.listraId);
Router.put('/act/:codpais', pais.actualizarPais);
Router.delete('/elm/:codpais', pais.eliminarPais);
Router.get('/conteo', pais.contadorPais);


