/*consultas referenciadas al modelo  utlizando orm LUCID*/
import Club from "../models/club.js"
class ClubService {

    async crearClub(datos) {
        return await Club.create(datos)
    }
    async listar() {
        return await Club.query()
    }
    async buscarId (codclub){
        return await Club.query().where('codclub',codclub)
    }

    async actualizar(codclub: number, datos: {
  club: string,
  nombre: string,
  direccion: string,
  poblacion: string,
  provincia: string,
  codPostal: string,
  telefono: string,
  colores: string,
  himno: string,
  fax: string,
  anioFundacion: number,
  presupuesto: number,
  presidente: string,
  vicepresidente: string
}) {
  const club = await Club.find(codclub)

  club.club = datos.club
  club.nombre = datos.nombre
  club.direccion = datos.direccion
  club.poblacion = datos.poblacion
  club.provincia = datos.provincia
  club.codPostal = datos.codPostal
  club.telefono = datos.telefono
  club.colores = datos.colores
  club.himno = datos.himno
  club.fax = datos.fax
  club.anioFundacion = datos.anioFundacion
  club.presupuesto = datos.presupuesto
  club.presidente = datos.presidente
  club.vicepresidente = datos.vicepresidente

  await club.save()
  
  return club
}
 async eliminar (codclub: number){
        const encontrado=await Club.find(codclub)
       if (encontrado) {
        await encontrado.delete()
        return "eliminado"
       }
       else{
        return "no eliminado"
       }
    }
    async conteo(){
        const resultado= await Club.query().count('* as conteo')
        return resultado[0].$extras.conteo
      }
}
export default ClubService