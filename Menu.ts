import { ItensEspeciais } from "./src/model/ItensEspeciais";
import { ItensMagicos } from "./src/model/ItensMagicos";
import rl from "readline-sync";
import { ItensNormais } from "./src/model/ItensNormais";
import { Conta } from "./src/model/Conta";
import { PetsMontarias } from "./src/model/PetsMontarias";
import { ItemController } from "./src/controller/ItemController";

export function main() {
  let itens: ItemController = new ItemController();

  // Variaveis auxiliares para cadastro e manipulação.
  let saldo,
    tipo,
    opcao,
    opcaoItens,
    itemEstoque,
    itemPreco,
    nivelMagia,
    nivelConta,
    itemRaridade: number;
  let usuario, itemNome, habitat, universo: string;
  let submenu = true;

  const tiposItens = [
    "Itens Normais",
    "Itens Magicos",
    "Itens Especiais",
    "Pets e Montarias",
  ];

  // Itens Para Teste

  let itemNormal1 = new ItensNormais(
    itens.gerarNumero(),
    1,
    "Machado",
    12.5,
    5,
    2
  );
  itens.cadastrarItem(itemNormal1);

  let itemNormal2 = new ItensNormais(
    itens.gerarNumero(),
    1,
    "Arco Gigante",
    12.5,
    3,
    7
  );
  itens.cadastrarItem(itemNormal2);

  let itemMagico1 = new ItensMagicos(
    itens.gerarNumero(),
    2,
    "Escama de Dragao Negro",
    80,
    2,
    9
  );
  itens.cadastrarItem(itemMagico1);

  let itemMagico2 = new ItensMagicos(
    itens.gerarNumero(),
    2,
    "Cubo Mágico de aço Faérico",
    85,
    1,
    10
  );
  itens.cadastrarItem(itemMagico2);

  let itemEspecial1 = new ItensEspeciais(
    itens.gerarNumero(),
    3,
    "Uo Uo no Mi",
    150,
    1,
    "One Piece"
  );
  itens.cadastrarItem(itemEspecial1);

  let itemEspecial2 = new ItensEspeciais(
    itens.gerarNumero(),
    3,
    "Pokebola",
    25,
    30,
    "Pokemon"
  );
  itens.cadastrarItem(itemEspecial2);

  let pet1 = new PetsMontarias(
    itens.gerarNumero(),
    4,
    "Porco Voador Assombrado",
    120,
    3,
    "Hibrido"
  );
  itens.cadastrarItem(pet1);

  let pet2 = new PetsMontarias(
    itens.gerarNumero(),
    4,
    "Mini Dragao Oriental",
    800,
    2,
    "Aereo"
  );
  itens.cadastrarItem(pet2);

  console.clear();
  // console.log(`\nBem vindo a RaiMystic Store\n`);
  // usuario = rl.question(`Me diga seu nome: `);
  // saldo = rl.questionFloat(`Quanto voce tem de saldo: $ `);
  // nivelConta = rl.questionInt(`Qual seu nivel: `);
  usuario = "Usuario";
  saldo = 5000;
  nivelConta = 10;
  let conta = new Conta(usuario, saldo, nivelConta);

  try {
    while (true) {
      console.clear();
      console.log(`\nRaiMystic Store\n`);
      console.log(`Olá, ${conta.usuario}, bem vindo a nossa loja!`);
      console.log(`Conta nivel: ${conta.nivelConta}`);
      console.log(`\nMeu saldo: $ ${conta.saldo.toFixed(2)}`);
      console.log(`Meu carrinho: $ ${itens.totalCarrinho().toFixed(2)}`);
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
        case 1: // Itens da Loja
          do {
            submenu = true;
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
                itens.listarItens(opcaoItens);
                itens.adicionarCarrinho();
                keyPress();
                break;

              case 2:
                console.clear();
                console.log(`\n Lista de Itens Magicos\n`);
                itens.listarItens(opcaoItens);
                itens.adicionarCarrinho();
                keyPress();
                break;

              case 3:
                console.clear();
                console.log(`\n Lista de Itens Especiais\n`);
                itens.listarItens(opcaoItens);
                itens.adicionarCarrinho();
                keyPress();
                break;

              case 4:
                console.clear();
                console.log(`\n Lista de Pets e Montarias\n`);
                itens.listarItens(opcaoItens);
                itens.adicionarCarrinho();
                keyPress();
                break;

              case 0:
                submenu = false;
                break;

              default:
                console.clear();
                console.log(`\n Opa, nao encontrei essa opcao, tente outra.\n`);
                keyPress();
                break;
            }
          } while (submenu);
          break;

        case 2: // Meu Carrinho
          console.clear();
          console.log(`\n Meu Carrinho\n`);
          itens.mostrarCarrinho();
          console.log(`Total do Carrinho: ${itens.totalCarrinho()}`);
          keyPress();
          break;

        case 3: // Depositar Dinheiro
          console.clear();
          console.log(`\n Depositar\n`);
          let deposito = rl.questionFloat(`Quanto deseja depositar? $ `);
          conta.depositar(deposito);
          break;

        case 4: // Finalizar Compra
          console.clear();
          console.log(`\n Finalizar Compra\n`);
          if (conta.saldo > itens.totalCarrinho()) {
            conta.debito(itens.totalCarrinho());
            itens.comprar();
            console.log("A compra dos itens foi realizada com sucesso!");
          } else {
            console.log(
              "Voce não tem saldo para isso. Deposite mais dinheiro e tente novamente."
            );
          }
          keyPress();
          break;

        case 5: // Cadastro de Item
          console.clear();
          console.log(`\n Cadastro de Item\n`);
          itemNome = rl.question("Nome do item: ");
          itemPreco = rl.questionFloat("Preco do item: $ ");
          itemEstoque = rl.questionInt("Estoque: ");
          tipo = rl.keyInSelect(tiposItens, "", { cancel: false }) + 1;

          switch (tipo) {
            case 1: // Cadastro de item Normal
              itemRaridade = rl.questionInt("Nivel de raridade: ");
              itens.cadastrarItem(
                new ItensNormais(
                  itens.gerarNumero(),
                  tipo,
                  itemNome,
                  itemPreco,
                  itemEstoque,
                  itemRaridade,
                  usuario
                )
              );
              break;

            case 2: // Cadastro de item Magico
              nivelMagia = rl.questionInt("Nivel magico: ");
              itens.cadastrarItem(
                new ItensMagicos(
                  itens.gerarNumero(),
                  tipo,
                  itemNome,
                  itemPreco,
                  itemEstoque,
                  nivelMagia,
                  usuario
                )
              );
              break;

            case 3: // Cadastro de item Especial
              universo = rl.question("Universo onde foi conquistado: ");
              itens.cadastrarItem(
                new ItensEspeciais(
                  itens.gerarNumero(),
                  tipo,
                  itemNome,
                  itemPreco,
                  itemEstoque,
                  universo,
                  usuario
                )
              );
              break;

            case 4: // Cadastro de pet/montaria
              habitat = rl.question("Habitat natural: ");
              itens.cadastrarItem(
                new ItensEspeciais(
                  itens.gerarNumero(),
                  tipo,
                  itemNome,
                  itemPreco,
                  itemEstoque,
                  habitat,
                  usuario
                )
              );
              break;
          }

          keyPress();
          break;

        case 6: // Mudar Conta
          console.clear();
          console.log(`\n Mudar Conta\n`);
          usuario = rl.question(`Qual seu nome: `);
          saldo = rl.questionFloat(`Qual seu saldo: `);
          nivelConta = rl.questionInt(`Qual seu nivel: `);
          conta = new Conta(usuario, saldo, nivelConta);
          console.log(`Sua conta foi atualizada com sucesso!\n`);
          keyPress();
          break;
      }
    }
  } catch {
    console.log("Erro ao entrar na loja. Tente novamente.");
  }
}

// Método de KeyPress para solicitar que uma tecla seja pressionada para continuar.
export function keyPress(): void {
  try {
    console.log(`Pressione enter para continuar...`);
    rl.prompt();
  } catch {
    console.log("Erro na execução da função, tente novamente.");
  }
}

// Método de "sobre" para exibição dos créditos ao finalizar o programa.
export function sobre(): void {
  console.log("##################################################");
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
