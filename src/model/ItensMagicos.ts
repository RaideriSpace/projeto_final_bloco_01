import { Itens } from "./Itens";

export class ItensMagicos extends Itens {
  private _nivelMagia: number;

  constructor(
    itemID: number,
    tipo: number,
    itemNome: string,
    itemPreco: number,
    itemEstoque: number,
    nivelMagia: number,
    itemDono?: string
  ) {
    super(itemID, itemEstoque, itemPreco, tipo, itemNome, itemDono);
    this._nivelMagia = nivelMagia;
  }

  public get nivelMagia(): number {
    return this._nivelMagia;
  }
  public set nivelMagia(value: number) {
    this._nivelMagia = value;
  }

  public mostrar(): void {
    super.mostrar();
    console.log(`              Nivel Mágico: ${this.nivelMagia.toFixed(1)}\n`);
  }
}