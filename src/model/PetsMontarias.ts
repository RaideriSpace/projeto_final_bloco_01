import { Itens } from "./Itens";

export class PetsMontarias extends Itens {
  private _tipoDeTerreno: string;

  constructor(
    itemEstoque: number,
    itemPreco: number,
    tipo: number,
    itemNome: string,
    tipoDeTerreno: string
  ) {
    super(itemEstoque, itemPreco, tipo, itemNome);
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
    console.log(`Tipo de Terreno: ${this.tipoDeTerreno}\n`);
  }
}