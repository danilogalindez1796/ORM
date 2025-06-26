import ClubService from "#services/ClubService"
import { messages } from "@vinejs/vine/defaults"

const clubService=new ClubService()

class ClubController{

    async crearClub({ request, response }) {
    try {
      const datos = request.body()
      const nuevo = await clubService.crearClub(datos)
      return response.json({ msj: "Datos creados" })
    } catch (error) {
      return response.json({ error: error.message })
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


    async clubId({params, request, response}){
        try { 
          const codclub=params.codclub
          const listaId=await clubService.buscarId((codclub))
            return response.json({msj:listaId})
    
    
        } catch (error) {
            return response.json({error:error, messages})
        }
    }


    async actualizarClub({ params, request, response }) {
  try {
    const codclub = params.codclub
    const {
      club,
      nombre,
      direccion,
      poblacion,
      provincia,
      codPostal,
      telefono,
      colores,
      himno,
      fax,
      anioFundacion,
      presupuesto,
      presidente,
      vicepresidente
    } = request.body()

    const clubActualizado = await clubService.actualizar(codclub, {
      club,
      nombre,
      direccion,
      poblacion,
      provincia,
      codPostal,
      telefono,
      colores,
      himno,
      fax,
      anioFundacion,
      presupuesto,
      presidente,
      vicepresidente
    })

    return response.json({ msj: "datos actualizados", datos: clubActualizado })

  } catch (error) {
    return response.json({ error: error, messages })
  }
}

async eliminarClub({params, request, response}) {
    try{
      const codclub = params.codclub
      const resp = await clubService.eliminar(codclub)
      return response.json({msj:resp})
    }
    catch (error){
      return response.json({error:error.messages})
    }
  }

   async contadorClub({request,response}){
      try{
      const resultado= await clubService.conteo()
      return response.json({msj:resultado})
    }catch(error){
      return response.json({error:error, messages})
  
    }
  }
}
export default ClubController