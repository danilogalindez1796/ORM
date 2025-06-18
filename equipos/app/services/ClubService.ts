/*consultas referenciadas al modelo  utlizando orm LUCID*/
import Club from "#models/club"
class ClubService {

    async crear(data:<Club>) {
        return await Club.create(data)
    }
    async listar() {
        return await Club.query
    }
    async buscarId (id:integer){
        return await Club.query().where('codclub',id)
    }
    async actualizar (id:integer, data:<Club>){
        const resp= await Club.findByOrFail(id)
        resp.merge(data).save()
    }
    async eliminar (id:integer){
        const resp= await Club.findByOrFail(id)
        return await resp.delete()
    }

}
export default ClubService