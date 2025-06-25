import Router from "@adonisjs/core/services/router";
import ClubController from "../../app/controller/ClubController.js";

const club = new ClubController()

Router.post('/crearClub', club.crearClub);
Router.get('/listarClub', club.ListarClub);