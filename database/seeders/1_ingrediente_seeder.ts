import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    return await Ingrediente.createMany([
      {id: 1, nome: 'Pães', descricao: 'Feito com farinha de centeio, este pão tem uma cor mais escura e um sabor característico e levemente adocicado. Pode ser denso e mais pesado que outros tipos de pão.'},
      {id: 2, nome: 'Carnes', descricao: 'Carne bovina é uma das carnes mais populares e versáteis. Bifes são cortes de carne bovina, geralmente grelhados, fritos ou assados, com uma grande variedade de cortes, incluindo filé mignon, contrafilé, picanha, alcatra, entre outros. A carne bovina é conhecida por sua suculência e sabor robusto.'},
      {id: 3, nome: 'Queijos', descricao: ' Um queijo macio e branco, conhecido por sua textura elástica e sabor suave. É amplamente utilizado em pizzas, lasanhas, sanduíches e saladas.'},
      {id: 4, nome: 'Vegetais', descricao: 'Um vegetal de folhas verdes, crocantes e levemente amargas, frequentemente usado como base para saladas e sanduíches. Existem vários tipos de alface, incluindo alface americana, alface romana e alface crespa.'},
      {id: 5, nome: 'ovos', descricao: 'A clara do ovo é a parte transparente e gelatinosa que envolve a gema. É composta principalmente de água e proteínas, incluindo albumina, que se torna branca quando cozida.'},
      {id: 6, nome: 'cogumelos', descricao: 'Esta é a parte superior arredondada do cogumelo, que pode variar em cor, textura e forma dependendo da espécie. Alguns cogumelos têm chapéus lisos, enquanto outros têm chapéus com sulcos ou protuberâncias'},
      {id: 7, nome: 'frutas', descricao: 'são cutivadas e regatas diariamente e limpas'}
    ])
  }
}