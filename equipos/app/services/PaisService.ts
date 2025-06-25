import Pai from "#models/pai"

class PaisService {

    async crearpais(datos){
        return await Pai.create(datos) 
    }
    async listarpais() {
        return await Pai.query()
    }
    async listarId(codpais){
        return await Pai.query().where('codpais', codpais)
    }
    async actualizar(codpais, datos:{nombrepais, comunitario}){
        const lista=await Pai.query().where('codpais', codpais)
        if(lista){
            lista.nombrepais=datos.nombrepais;
            lista.comunitario=datos.comunitario
        }
        await lista.save()
        return lista
    }
}
export default PaisService