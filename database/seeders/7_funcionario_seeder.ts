import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'
export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {nome: 'Roberto', cpf: '123.132.123-09', endereco: 'oi', sexo: 'M', telefone:'619767-1234', cargoId: 5},
      {nome: 'Maria', cpf: '123.132.123-09', endereco: 'oi', sexo: 'F', telefone:'619767-1234', cargoId: 5},
      {nome: 'Alex', cpf: '123.132.123-09', endereco: 'oi', sexo: 'M', telefone:'619767-1234', cargoId: 5},
      {nome: 'Bia', cpf: '123.132.123-09', endereco: 'oi', sexo: 'F', telefone:'619767-1234', cargoId: 5},
      {nome: 'Duda', cpf: '123.132.123-09', endereco: 'oi', sexo: 'F', telefone:'619767-1234', cargoId: 1},
      {nome: 'Antonio', cpf: '123.132.123-09', endereco: 'oi', sexo: 'M', telefone:'619767-1234', cargoId: 2},
      {nome: 'Carlo', cpf: '123.132.123-09', endereco: 'oi', sexo: 'M', telefone:'619767-1234', cargoId: 6},
      {nome: 'Felipe', cpf: '123.132.123-09', endereco: 'oi', sexo: 'M', telefone:'619767-1234', cargoId: 8},
      {nome: 'Laura', cpf: '123.132.123-09', endereco: 'oi', sexo: 'F', telefone:'619767-1234', cargoId: 3},
      {nome: 'Yuno', cpf: '123.132.123-09', endereco: 'oi', sexo: 'F', telefone:'619767-1234', cargoId: 4},
      {nome: 'Pedro', cpf: '123.132.123-09', endereco: 'oi', sexo: 'M', telefone:'619767-1234', cargoId: 7}
    
    ])
  }
}