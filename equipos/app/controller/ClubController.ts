import ClubService from "#services/ClubService"
import { messages } from "@vinejs/vine/defaults"

const clubService=new ClubService()

class ClubController{

    async crearClub({request, response}){
        try{
        const {club, nombre, direccion, poblacion, provincia, codPostal, telefono, colores, himno, fax,
         añoFundacion, presupuesto, presidente, vicepresidente} = request.body()

        const nuevoClub=await clubService.crear({club, nombre, direccion, poblacion, provincia, codPostal, telefono, colores, himno, fax,
         añoFundacion, presupuesto, presidente, vicepresidente})
         return response.json({msj:"club creado ", datos:nuevoClub})
        }
        catch(error){
            return response.json({error:error,messages})

        }
    }
    async ListarClub({request, response}){
        try{
            const listarClub=await clubService.listar()
            return response.json({datos:listarClub})
        }
        catch(error){
            return response.json({error:"error en listar los clubes"})
        }
    }

}
export default ClubController