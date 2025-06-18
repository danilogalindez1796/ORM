import Router from "@adonisjs/core/services/router";
import ClubController from "../../app/controller/ClubController.js";

const club = new ClubController()

Router.post('/crear', club.crearClub);
Router.get('/listar', club.ListarClub);