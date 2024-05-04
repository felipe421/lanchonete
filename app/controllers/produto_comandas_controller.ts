// import type { HttpContext } from '@adonisjs/core/http'
import ProdutoComanda from "../models/produto_comanda.js";
export default class ProdutoComandasController {
    async index() {
        return await ProdutoComanda.all()

    }
}