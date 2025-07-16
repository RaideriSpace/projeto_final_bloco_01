import { Itens } from "./Itens";

export class ItensMagicos extends Itens {
  private _nivelMagia: number;

  constructor(
    itemEstoque: number,
    itemPreco: number,
    tipo: number,
    itemNome: string,
    nivelMagia: number
  ) {
    super(itemEstoque, itemPreco, tipo, itemNome);
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
    console.log(`Nivel Mágico: ${this.nivelMagia.toFixed(1)}\n`);
  }
}