import Router from "@adonisjs/core/services/router";
import EstadioController from "../../app/controller/EstadioController.js";

const estadio = new EstadioController()

Router.post('/crearEstadio', estadio.crearEstadio);
Router.get('/listarEstadio', estadio.listarEstadio);
Router.get('/listarEstadio/:codestadios', estadio.estadioId);
Router.put('/ActEstadio/:codestadios', estadio.actualizarEstadio);
Router.delete('/elmEstadio/:codestadios', estadio.eliminarEstadio);
Router.get('/conteoEstadio', estadio.contadorEstadio);