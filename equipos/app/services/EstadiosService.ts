/*consultas referenciadas al modelo  utlizando orm LUCID*/
import Estadio from "#models/estadio"
class estadioService {

    async crearEstadio(datos) {
        return await Estadio.create(datos)
    }
    async listarEstadio() {
        return await Estadio.query
    }
    async estadioId (cod){
        return await Estadio.query().where('codclub',codclub)
    }
}
export default estadioService