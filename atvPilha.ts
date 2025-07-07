import ler = require("readline-sync");
import {Stack} from "./stackMetodos";


const pilha = new Stack<string>();
let rodando = true;


while (rodando) {
   console.log("* * * * * * * * * * * * * * * * * * *");
   console.log("*                                   *");
   console.log("* 1 - Adicionar livro na            *");
   console.log("* 2 - Mostrar livros da Pilha       *");
   console.log("* 3 - Retirar livro da pilha        *");
   console.log("* 0 - Sair                          *");
   console.log("*                                   *");
   console.log("* * * * * * * * * * * * * * * * * * *");

  let opcao = ler.questionInt("Digite uma opcao: ");

  switch (opcao) {
    case 1:
      let livro = ler.question("Digite o nome: ");
      pilha.push(livro);
      console.log("Pilha:");
      pilha.printStack();
      console.log("Livro adicionado!");
      break;
    case 2:
      pilha.printStack();
      break;
    case 3:
      if (pilha.isEmpty()) {
        console.log("A Pilha está vazia!");
      } else {
        pilha.pop();
        console.log("Pilha:");
        pilha.printStack();
        console.log("Um Livro foi retirado da pilha!");
      }
      break;
    case 0:
      console.log("Programa Finalizado!");
      rodando = false;
      break;
    default:
      console.log("Opção inválida!");
  }
}
