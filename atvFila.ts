/*Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
*/ 


import ler = require("readline-sync")
import {Queue} from "./queeuMetodos"
import {Stack} from "./stackMetodos";

const fila = new Queue<string>();
let rodando = true;

do { 
   console.log("* * * * * * * * * * * * * * * * * * *");
   console.log("*                                   *");
   console.log("*   1 - Adicionar cliente na fila   * ");
   console.log("*   2 - Lista de clientes na fila   *");
   console.log("*   3 - Retirar cliente da fila    *");
   console.log("*   0 - sair                        *");
   console.log("*                                   *");
   console.log("* * * * * * * * * * * * * * * * * * *");
   
   let opcao = ler.questionInt("Digite uma opcao: ")

switch (opcao) {
    case 1:
        fila.enqueue (ler.question("nome: ")); //adicionar na lista
        console.log("Cliente adicionado!");
        break;   
    case 2:
        fila.printQueue(); // ver lista de clientes
        break;
    case 3:
        if (fila.isEmpty()) {
        console.log("Fila vazia!");
      } else {
        fila.dequeue(); // Termina o atendimento do primeiro cliente que chegou
        console.log("Cliente foi chamado!");
      }
      break;
    case 0:
        console.log("Programa finalizado!");
        rodando = false;
        break;
        default:
            console.log("opcão invalida, tente novamente")
 }
} while (rodando);
