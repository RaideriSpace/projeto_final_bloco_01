import { Itens } from "./Itens";

export class ItensNormais extends Itens {
  private _nivelRaridade: number;

  constructor(
    itemID: number,
    tipo: number,
    itemNome: string,
    itemPreco: number,
    itemEstoque: number,
    nivelRaridade: number,
    itemDono?: string
  ) {
    super(itemID, itemEstoque, itemPreco, tipo, itemNome, itemDono);
    this._nivelRaridade = nivelRaridade;
  }

  public get nivelRaridade(): number {
    return this._nivelRaridade;
  }
  public set nivelRaridade(value: number) {
    this._nivelRaridade = value;
  }

  public mostrar(): void {
    super.mostrar();
    console.log(`Raridade: ${this.nivelRaridade.toFixed(1)}\n`);
  }
}