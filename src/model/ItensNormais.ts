import { Itens } from "./Itens";

export class ItensNormais extends Itens {
  private _nivelRaridade: number;

  constructor(
    itemEstoque: number,
    itemPreco: number,
    tipo: number,
    itemNome: string,
    nivelRaridade: number
  ) {
    super(itemEstoque, itemPreco, tipo, itemNome);
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