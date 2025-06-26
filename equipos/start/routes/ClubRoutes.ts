import Router from "@adonisjs/core/services/router";
import ClubController from "../../app/controller/ClubController.js";

const club = new ClubController()

Router.post('/crearClub', club.crearClub);
Router.get('/listarClub', club.ListarClub);
Router.get('/listarClub/:codclub', club.clubId);
Router.put('/ActClub/:codclub', club.actualizarClub);
Router.delete('/elmClub/:codclub', club.eliminarClub);
Router.get('/conteoClub', club.contadorClub);
