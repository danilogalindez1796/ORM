/*consultas referenciadas al modelo  utlizando orm LUCID*/
import Club from "../models/club.js"
class ClubService {

    async crear(datos) {
        return await Club.create(datos)
    }
    async listar() {
        return await Club.query
    }
    async buscarId (codclub){
        return await Club.query().where('codclub',codclub)
    }
    
    async actualizar (id:integer, data:Club){
        const resp= await Club.findByOrFail(id)
        resp.merge(data).save()
    }
    async eliminar (id:integer){
        const resp= await Club.findByOrFail(id)
        return await resp.delete()
    }

}
export default ClubService