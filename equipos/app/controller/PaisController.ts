import Pai from "#models/pai"
import PaisService from "#services/PaisService"
import { messages } from "@vinejs/vine/defaults"
import { error } from "console"
//instancia
const paisservice=new PaisService()
 class  PaisController{

    async crearPais({request,response}){
      try{
      const{nombrepais,comunitario}=request.body()
      const nuevo= await paisservice.crearpais({nombrepais,comunitario})
      return response.json({msj:"datos creados", datos:nuevo})
      }
      catch(error){
        return response.json({error:error, messages})
      }
    }

    
    async listarpais({request,response}){
      try{
      const list= await paisservice.listarpais()
      return response.json({msj:"listado de paises"})
      }catch (error){
         return response.json({error:error, messages})
      }
    }


    async listraId({params, request, response}){
    try { 
      const codpais=params.codpais
      const listaId=await paisservice.listarId((codpais))
        return response.json({msj:listaId})


    } catch (error) {
        return response.json({error:error, messages})
    }
  }
    async actualizarPais({params,request,response}){
    try {
      const codpais=params.codpais
      const{nombrepais,comunitario}=request.body()
      const listadonuevo= await paisservice.actualizar(codpais,{nombrepais,comunitario})
      return response.json({msj:"datos actualizados", datos:listadonuevo})
      
    } catch (error) {
          return response.json({error:error, messages})
    }
  }

  async eliminarPais({params, request, response}) {
    try{
      const codpais = params.codpais
      const resp = await paisservice.eliminar(codpais)
      return response.json({msj:resp})
    }
    catch (error){
      return response.json({error:error.messages})
    }
  }

  async contadorPais({request,response}){
    try{
    const resultado= await paisservice.conteo()
    return response.json({msj:resultado})
  }catch(error){
              return response.json({error:error, messages})

  }
}

}
export default PaisController