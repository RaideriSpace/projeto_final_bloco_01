import rl from "readline-sync";
import { Itens } from "../model/Itens";
import { ItensEspeciais } from "../model/ItensEspeciais";
import { ItensMagicos } from "../model/ItensMagicos";
import { ItensNormais } from "../model/ItensNormais";
import { PetsMontarias } from "../model/PetsMontarias";
import { ItensRepository } from "../repository/ItensRepository";
import { Conta } from "../model/Conta";
import { header } from "../../Menu";

// Adição de uma mini interface interna para controle do carrinho.
interface ItensCarrinho {
  item: Itens;
  quantidade: number;
}

export class ItemController implements ItensRepository {
  private itensGerais: Itens[] = [];
  private meuCarrinho: ItensCarrinho[] = [];
  numero: number = 0;

  listarItens = (escolha: number): void => {
    console.clear();
    header();
    for (let item of this.itensGerais) {
      if (item.itemEstoque > 0) {
        if (item.tipo == escolha) {
          item.mostrar();
        }
      }
    }
  };

  adicionarCarrinho = (): void => {
    let id = rl.questionInt(
      "       Digite o ID do item para adicionar ao carrinho: \n       "
    );
    let quantidade = rl.questionInt(
      "       Quantos itens deseja adicionar:\n       "
    );

    let encontrarItem = this.itensGerais.find(
      (newItem) => newItem.itemID == id
    );

    if (encontrarItem) {
      if (quantidade > 0 && encontrarItem.itemEstoque >= quantidade) {
        this.meuCarrinho.push({ item: encontrarItem, quantidade: quantidade });
        encontrarItem.removerEstoque(quantidade);
        console.log(
          `\n       ${quantidade} x ${encontrarItem.itemNome} foi adicionados ao seu carrinho com sucesso\n`
        );
      } else if (quantidade > 0 && encontrarItem.itemEstoque < quantidade) {
        console.log(
          `\n              Nao temos tantos desse item assim, desculpe.`
        );
      } else {
        console.log(`\n              Não entendi oque esta querendo fazer...`);
      }
    } else {
      console.log("              Não temos um item com esse ID.");
    }
  };

  mostrarCarrinho = (): void => {
    console.clear();
    header();
    if (this.meuCarrinho.length != 0) {
      for (let itemCarrinho of this.meuCarrinho) {
        console.log(
          `              ${
            itemCarrinho.item.itemNome
          } | Preco: $ ${itemCarrinho.item.itemPreco.toFixed(2)}`
        );
        console.log(`              Quantidade: ${itemCarrinho.quantidade}\n`);
      }
    } else {
      console.log(
        "\n              Seu carrinho esta vazio. Adicione alguma coisa na loja de itens!\n"
      );
    }
  };

  cadastrarItem = (novoItem: Itens): void => {
    this.itensGerais.push(novoItem);
    console.log("\n              Novo item cadastrado com sucesso!");
  };

  comprar = (): void => {
    this.meuCarrinho = [];
  };

  deletarItemCarrinho = (): void => {
    console.clear();
    header();
    if (this.meuCarrinho.length != 0) {
      console.log("\n       Itens no Carrinho\n");
      for (let itemCarrinho of this.meuCarrinho) {
        console.log(
          `              ID: ${itemCarrinho.item.itemID} ${
            itemCarrinho.item.itemNome
          } | Preco: ß$ ${itemCarrinho.item.itemPreco.toFixed(
            2
          )} | Quantidade: ${itemCarrinho.quantidade}\n`
        );
        let itemDelet = rl.questionInt(
          "       Digite o ID do item a remover: \n       "
        );

        let indiceItem = this.meuCarrinho.findIndex(
          (itemCarrinho) => itemCarrinho.item.itemID == itemDelet
        );

        if (indiceItem != -1) {
          let itemRemovido = this.meuCarrinho[indiceItem];

          itemRemovido.item.adicionarEstoque(itemRemovido.quantidade);

          this.meuCarrinho.splice(indiceItem, 1);

          console.log(
            "\n              Item Removido com sucesso do carrinho!\n"
          );
        } else {
          console.log("\n              Item nao encontrado no carrinho!");
        }
      }
    } else {
      console.log(
        "\n              Seu carrinho esta vazio. Adicione alguma coisa na loja de itens!\n"
      );
    }
  };

  // Gerar número da conta;
  gerarNumero = (): number => ++this.numero;

  // Gerar valor total do carrinho;
  totalCarrinho = (): number => {
    let soma = 0;
    let multiplicacao = 0;

    for (let itemCarrinho of this.meuCarrinho) {
      multiplicacao = itemCarrinho.quantidade * itemCarrinho.item.itemPreco;
      soma += multiplicacao;
    }
    return soma;
  };
}
