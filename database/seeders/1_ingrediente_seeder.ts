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
      {id: 7, nome: 'frutas', descricao: 'são cutivadas e regatas diariamente e limpas'},
      {id: 8, nome: 'açucar', descricao: 'O açúcar é uma substância natural encontrada em muitos alimentos, e é um carboidrato simples conhecido cientificamente como sacarose.'},
      {id: 9, nome: 'água', descricao: 'nossa água é livre de impurezas visíveis, sedimentos, partículas em suspensão ou qualquer outro material que possa turvar sua aparência..'},
      {id: 10, nome: 'água com gas', descricao: 'Nossa água é cuidadosamente selecionada de fontes naturais intocadas, garantindo a pureza cristalina que você merece. Livre de impurezas e processada com os mais altos padrões de qualidade, cada gole é uma experiência de frescor e clareza.'},
      {id: 11, nome: 'leite', descricao: 'Nosso leite fresco é cuidadosamente selecionado de fazendas locais, garantindo a mais alta qualidade e frescor em cada gota. Produzido por vacas felizes alimentadas com pastagem, nosso leite é uma fonte inigualável de pureza e frescor.'},
      {id: 12, nome: 'chocolate', descricao: 'Nosso chocolate é feito com cacau de origem cuidadosamente selecionada, proveniente de fazendas sustentáveis e éticas. Cada mordida é uma homenagem à qualidade e à excelência, refletindo nosso compromisso com os mais altos padrões de produção.'},
      {id: 13, nome: 'xarope ', descricao: 'Cada gota é uma explosão de doçura e sabor que transforma qualquer prato ou bebida em uma experiência verdadeiramente excepcional. '},
      {id: 14, nome: 'mel ', descricao:'Cada gota é uma celebração da doçura natural e da riqueza de sabor que só o mel puro e de alta qualidade pode oferecer.'},
      {id: 15, nome: 'franco ', descricao:'Nosso frango é cuidadosamente selecionado de fornecedores que seguem os mais altos padrões de criação e processamento.'},
      {id: 16, nome: 'peixe ', descricao:'Nosso peixe é cuidadosamente selecionado de fontes confiáveis e sustentáveis, garantindo o máximo de frescor e qualidade em cada filé.'},
      {id: 17, nome: 'farinha ', descricao:'Pureza e Qualidade: Nossa farinha é produzida a partir dos melhores grãos, cultivados em fazendas locais e sustentáveis.'},
      {id: 18, nome: 'manteiga ', descricao:'Nossa manteiga é produzida a partir do leite das vacas mais felizes, criadas em fazendas locais e sustentáveis.'},
    ])
  }
}