import { Itens } from "../model/Itens";

export interface ItensRepository {
  listarItens(value: number): void;
  adicionarCarrinho(): void;
  mostrarCarrinho(): void;
  cadastrarItem(item: Itens): void;
  comprar(item: Itens): void;
}