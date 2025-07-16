import { Itens } from "./Itens";

export class ItensEspeciais extends Itens {
  private _universoRetirado: string;

  constructor(
    itemID: number,
    tipo: number,
    itemNome: string,
    itemPreco: number,
    itemEstoque: number,
    universoRetirado: string,
    itemDono?: string,
  ) {
    super(itemID, itemEstoque, itemPreco, tipo, itemNome, itemDono);
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
    console.log(`              Conquistado em: ${this.universoRetirado}\n`);
  }
}
