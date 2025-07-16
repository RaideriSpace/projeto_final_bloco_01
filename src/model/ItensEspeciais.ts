import { Itens } from "./Itens";

export class ItensEspeciais extends Itens {
  private _universoRetirado: string;

  constructor(
    itemEstoque: number,
    itemPreco: number,
    tipo: number,
    itemNome: string,
    universoRetirado: string
  ) {
    super(itemEstoque, itemPreco, tipo, itemNome);
    this._universoRetirado = universoRetirado;
  }

  public get universoRetirado(): string {
    return this._universoRetirado;
  }
  public set universoRetirado(value: string) {
    this._universoRetirado = value;
  }

  public mostrar(): void {
    super.mostrar();
    console.log(`Conquistado em: ${this.universoRetirado}\n`);
  }
}
