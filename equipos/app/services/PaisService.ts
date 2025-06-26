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
    async actualizar(codpais, datos: { nombrepais, comunitario }) {
    const pais = await Pai.findBy('codpais', codpais); 
        pais.nombrepais = datos.nombrepais;
        pais.comunitario = datos.comunitario;
        await pais.save();
        return pais;
    }

    async eliminar (codpais: number){
        const encontrado=await Pai.find(codpais)
       if (encontrado) {
        await encontrado.delete()
        return "eliminado"
       }
       else{
        return "no eliminado"
       }
      
    }
    
    async conteo(){
    const resultado= await Pai.query().count('* as conteo')
    return resultado[0].$extras.conteo
  }
}
export default PaisService