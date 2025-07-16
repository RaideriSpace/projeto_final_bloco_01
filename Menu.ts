import rl from "readline-sync";

export function main() {
  // Variaveis auxiliares para cadastro e manipulação.
  let saldo,
    tipo,
    opcao,
    opcaoItens,
    itemEstoque,
    itemPreco,
    nivelMagia,
    nivelConta,
    ranqueItem: number;
  let usuario, itemNome: string;

  const tiposItens = [
    "Itens Normais",
    "Itens Magicos",
    "Itens Especiais",
    "Pets e Montarias",
  ];

  // Itens Para Teste

  // let item: ItemNormal = new ItemNormal(itemNome, itemPreco, itemEstoque, tipo, ranqueItem);

  while (true) {
    console.clear();
    console.log(`\nRaiMystic Store\n`);
    console.log(`Olá, usuario, bem vindo a nossa loja!`);
    console.log(`Conta nivel: 3`);
    console.log(`Meu saldo: $ 0,00`);
    console.log(`Meu carrinho: $ 0,00`);
    console.log(`\nO que deseja fazer hoje:\n`);
    console.log(`1 - Ver Itens`);
    console.log(`2 - Ver Carrinho`);
    console.log(`3 - Depositar`);
    console.log(`4 - Finalizar Compra`);
    console.log(`5 - Cadastrar meu item`);
    console.log(`6 - Mudar Conta`);
    console.log(`0 - Sair\n`);

    opcao = rl.questionInt("");

    if (opcao == 0) {
      console.clear();
      console.log("Obrigado pela preferência, volte sempre!");
      console.log("Temos novos itens toda semana!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.clear();
        console.log(`\nitens\n`);
        console.log(`\nEscolha um tipo:\n`);
        console.log(`1 - Itens Normais`);
        console.log(`2 - Itens Magicos`);
        console.log(`3 - Itens Especiais`);
        console.log(`4 - Pets e Montarias`);
        console.log(`0 - Voltar`);

        opcaoItens = rl.questionInt("\nQual opcao sera? \n");

        switch (opcaoItens) {
          case 1:
            console.clear();
            console.log(`\n Lista de Itens Normais\n`);
            keyPress();
            break;

          case 2:
            console.clear();
            console.log(`\n Lista de Itens Magicos\n`);
            keyPress();
            break;

          case 3:
            console.clear();
            console.log(`\n Lista de Itens Especiais\n`);
            keyPress();
            break;

          case 4:
            console.clear();
            console.log(`\n Lista de Pets e Montarias\n`);
            keyPress();
            break;

          case 0:
            break;

          default:
            console.clear();
            console.log(`\n Opa, nao encontrei essa opcao, tente outra.\n`);
            keyPress();
            break;
        }
        break;

      case 2:
        console.clear();
        console.log(`\n Meu Carrinho\n`);
        keyPress();
        break;
      case 3:
        console.clear();
        console.log(`\n Depositar\n`);
        keyPress();
        break;
      case 4:
        console.clear();
        console.log(`\n Finalizar Compra\n`);
        keyPress();
        break;
      case 5:
        console.clear();
        console.log(`\n Cadastro de Item\n`);
        keyPress();
        break;
      case 6:
        console.clear();
        console.log(`\n Mudar Conta\n`);
        keyPress();
        break;
    }
  }
}

// Método de KeyPress para solicitar que uma tecla seja pressionada para continuar.
export function keyPress(): void {
  console.log(`Pressione enter para continuar...`);
  rl.prompt();
}

// Método de "sobre" para exibição dos créditos ao finalizar o programa.
export function sobre(): void {
  console.log("                                                  ");
  console.log("  Projeto Desenvolvido por:                       ");
  console.log("  Lucas Alves Pinheiro                            ");
  console.log("  E-mail: l.pinheiro.w@gmail.com.br               ");
  console.log("  GitHub: github.com/RaideriSpace                 ");
  console.log("                                                  ");
  console.log("##################################################");
  // console.log(
  //   "                                                 ",
  //   colors.reset
  // );
}

// Chama o main para rodar.
main();
