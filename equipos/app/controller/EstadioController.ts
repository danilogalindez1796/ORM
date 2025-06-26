import EstadioService from "#services/EstadiosService"
import { messages } from "@vinejs/vine/defaults"

const estadioService = new EstadioService()

class EstadioController {

  async crearEstadio({ request, response }) {
    try {
      const datos = request.body()
      const nuevo = await estadioService.crearEstadio(datos)
      return response.json({ msj: "Datos creados" })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listarEstadio({ request, response }) {
    try {
      const listarEstadio = await estadioService.listarEstadio()
      return response.json({ datos: listarEstadio })
    } catch (error) {
      return response.json({ error: "error en listar los estadios" })
    }
  }

  async estadioId({ params, request, response }) {
    try {
      const codestadios = params.codestadios
      const listaId = await estadioService.estadioId(codestadios)
      return response.json({ msj: listaId })
    } catch (error) {
      return response.json({ error: error, messages })
    }
  }

  async actualizarEstadio({ params, request, response }) {
    try {
      const codestadios = params.codestadios
      const {
        estadio,
        direccion,
        codPostal,
        poblacion,
        provincia,
        capacidad,
        sentados,
        inaguracion,
        dimensiones
      } = request.body()

      const estadioActualizado = await estadioService.actualizar(codestadios, {
        estadio,
        direccion,
        codPostal,
        poblacion,
        provincia,
        capacidad,
        sentados,
        inaguracion,
        dimensiones
      })

      return response.json({ msj: "datos actualizados", datos: estadioActualizado })
    } catch (error) {
      return response.json({ error: error, messages })
    }
  }

  async eliminarEstadio({ params, request, response }) {
    try {
      const codestadios = params.codestadios
      const resp = await estadioService.eliminar(codestadios)
      return response.json({ msj: resp })
    } catch (error) {
      return response.json({ error: error.messages })
    }
  }

  async contadorEstadio({ request, response }) {
    try {
      const resultado = await estadioService.conteo()
      return response.json({ msj: resultado })
    } catch (error) {
      return response.json({ error: error, messages })
    }
  }
}

export default EstadioController
