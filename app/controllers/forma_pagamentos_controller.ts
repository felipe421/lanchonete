 import type { HttpContext } from '@adonisjs/core/http'
import FormaPagamento from "../models/forma_pagamento.js";
export default class FormaPagamentosController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await FormaPagamento.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {


        return await FormaPagamento.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome'])


        return await FormaPagamento.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const forma_pagamento = await FormaPagamento.findOrFail(params.id)
        const dados = request.only(['nome'])

        forma_pagamento.merge(dados)
        return await forma_pagamento.save()

    }

    async destroy({ params }: HttpContext) {
        const forma_pagamento = await FormaPagamento.findOrFail(params.id)

        await forma_pagamento.delete()
        return { msg: 'registro deletado com sucesso', forma_pagamento }

    }
}