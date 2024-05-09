import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'
export default class extends BaseSeeder {
  async run() {
    return await Produto.createMany([
      {nome: 'coca-cola', preco: 6.7, tamanho: '1L', tipoId:1},
      {nome: 'suco de marucujar', preco: 5, tamanho: '300g', tipoId:1},
      {nome: 'sarro de marucujar', preco: 15, tamanho: '300g', tipoId:1},
      {nome: 'agua mineral', preco: 2, tamanho: '200g', tipoId:1},
      {nome: 'milkshakes', preco: 10, tamanho: '300g', tipoId:1},
      {nome: 'café', preco: 3, tamanho: '150g', tipoId:1},
      {nome: 'chá', preco: 3, tamanho: '200g', tipoId:1},

      {nome: 'sanduíches de frango', preco: 12, tamanho: '300g', tipoId: 7},
      {nome: 'sanduíches de peixe', preco: 12, tamanho: '300g', tipoId:7},
      {nome: 'sanduíches vegetarianos', preco: 12, tamanho: '300g', tipoId:7},

      {nome: 'porte de Sorvete', preco: 20, tamanho: '1L', tipoId:5},
      {nome: 'pedaço de bolo', preco: 5, tamanho: '100g', tipoId:5},
      {nome: 'cookies', preco: 3, tamanho: '50g', tipoId:5},
      {nome: 'brownies', preco: 3, tamanho: '50g', tipoId:5},
      {nome: 'geladina', preco: 5, tamanho: '100g', tipoId:5},

      {nome: 'X-tudo', preco: 12, tamanho: '400g', tipoId:3},
      {nome: 'X-vegetariano', preco: 12, tamanho: '200g', tipoId:3},
      {nome: 'Hambúrguer Clássico', preco: 12, tamanho: '400g', tipoId:3},
      {nome: 'Hambúrguer Gourmet', preco: 15, tamanho: '400g', tipoId:3},
      {nome: 'cheeseburgers', preco: 12, tamanho: '400g', tipoId:3},

      {nome: 'Pizza Margherita', preco: 20, tamanho: '300g', tipoId:6},
      {nome: 'Pizza Pepperoni', preco: 20, tamanho: '300g', tipoId:6},
      {nome: 'Pizza Calabresa', preco: 20, tamanho: '300g', tipoId:6},
      {nome: 'Pizza Frango com Catupiry', preco: 20, tamanho: '300g', tipoId:6},
      {nome: 'Pizza Hawaiian', preco: 20, tamanho: '300g', tipoId:6},

      {nome: 'Crepes de Frango e Cogumelos', preco: 15, tamanho: '200g', tipoId:4},
      {nome: 'Crepes de Presunto e Queijo', preco: 15, tamanho: '200g', tipoId:4},
      {nome: 'Crepes de Frutas', preco: 15, tamanho: '200g', tipoId:4},
      {nome: 'Crepes de Nutella', preco: 15, tamanho: '200g', tipoId:4},
      {nome: 'Crepes de Caramelo Salgado', preco: 15, tamanho: '200g', tipoId:4},
      
      {nome: 'Batatas', preco: 7, tamanho: '200g', tipoId:8},
      {nome: 'Vegetais', preco: 4, tamanho: '100g', tipoId:8},
      {nome: 'Farofa', preco: 1.5, tamanho: '15g', tipoId:8},
      {nome: 'Molhos e Chutneys', preco: 0.50, tamanho: '200g', tipoId:8},
      {nome: 'Feijão', preco: 2, tamanho: '10g', tipoId:8}
    ])
  }
}