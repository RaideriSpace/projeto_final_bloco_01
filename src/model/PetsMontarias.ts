import { Itens } from "./Itens";

export class PetsMontarias extends Itens {
  private _tipoDeTerreno: string;

  constructor(
    itemID: number,
    tipo: number,
    itemNome: string,
    itemPreco: number,
    itemEstoque: number,
    tipoDeTerreno: string,
    itemDono?: string,
  ) {
    super(itemID, itemEstoque, itemPreco, tipo, itemNome, itemDono);
    this._tipoDeTerreno = tipoDeTerreno;
  }

  public get tipoDeTerreno(): string {
    return this._tipoDeTerreno;
  }
  public set tipoDeTerreno(value: string) {
    this._tipoDeTerreno = value;
  }

  public mostrar(): void {
    super.mostrar();
    console.log(`              Tipo de Terreno: ${this.tipoDeTerreno}\n`);
  }
}