import { Itens } from "../model/Itens";

export interface ItensRepository {
  listarItens(): void;
  carrinho(): void;
  cadastrar(item: Itens): void;
  comprar(item: Itens): void;
}