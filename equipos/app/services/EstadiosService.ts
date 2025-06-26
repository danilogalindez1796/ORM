/*consultas referenciadas al modelo  utlizando orm LUCID*/
import Estadio from "#models/estadio"
class EstadioService {

    async crearEstadio(datos) {
        return await Estadio.create(datos)
    }
    async listarEstadio() {
        return await Estadio.query()
    }
    async estadioId (codestadios){
        return await Estadio.query().where('codestadios',codestadios)
    }
    async actualizar(codestadios: number, datos: {
  estadio: string,
  direccion: string,
  codPostal: string,
  poblacion: string,
  provincia: string,
  capacidad: number,
  sentados: number,
  inaguracion: Date,
  dimensiones: number
}) {
  const estadio = await Estadio.find(codestadios)

  estadio.estadio = datos.estadio
  estadio.direccion = datos.direccion
  estadio.codPostal = datos.codPostal
  estadio.poblacion = datos.poblacion
  estadio.provincia = datos.provincia
  estadio.capacidad = datos.capacidad
  estadio.sentados = datos.sentados
  estadio.inaguracion = datos.inaguracion
  estadio.dimensiones = datos.dimensiones

  await estadio.save()

  return estadio
}
   async eliminar (codestadios: number){
           const encontrado=await Estadio.find(codestadios)
          if (encontrado) {
           await encontrado.delete()
           return "eliminado"
          }
          else{
           return "no eliminado"
          }
       }
       async conteo(){
           const resultado= await Estadio.query().count('* as conteo')
           return resultado[0].$extras.conteo
         }
}
export default EstadioService