import ClubService from "#services/ClubService"

const clubService=new ClubService()

class ClubController{

    async crearClub({request, response}){
        try{
        const {club, nombre, direccion, poblacion, provincia, cosPostal, telefono, colores, himno, fax,
         añoFundacion, presupuesto, vicepresidente} = request.body()

        const nuevoClub=await clubService.crear({club, nombre, direccion, poblacion, provincia, cosPostal, telefono, colores, himno, fax,
         añoFundacion, presupuesto, vicepresidente})
         return response.json({msj:"club creado ", datos:nuevoClub})
        }
        catch{
            return response.json({error:"no se creo el club"})

        }
    }
    async ListarClub({request, response}){
        try{
            const listarClub=await clubService.listar()
            return response.json({datos:listarClub})
        }
        catch{
            return response.json({error:"error en listar los clubes"})
        }
    }

}
export default ClubController