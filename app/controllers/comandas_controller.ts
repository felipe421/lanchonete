import type { HttpContext } from '@adonisjs/core/http'
import Comanda from "../models/comanda.js";
export default class ComandasController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Comanda.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {


        return await Comanda.query()
            .where('id', params.id)
            .preload('cliente')
            .preload('formaPagamento')
            .preload('funcionario')
            .preload('cliente')
            .first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'formaPagamentoId', 'data_pagamento', 'data'])


        return await Comanda.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const comanda = await Comanda.findOrFail(params.id)
        const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'formaPagamentoId', 'data_pagamento', 'data'])

        comanda.merge(dados)
        return await comanda.save()

    }

    async destroy({ params }: HttpContext) {
        const comanda = await Comanda.findOrFail(params.id)

        await comanda.delete()
        return { msg: 'registro deletado com sucesso', comanda }

    }
}