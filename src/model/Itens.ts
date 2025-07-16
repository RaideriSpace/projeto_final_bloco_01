// Exportação da classe abstrata "Itens"
export abstract class Itens {
  // Declaração das características privadas da classe abstrata "Itens"
  private _itemEstoque: number;
  private _itemPreco: number;
  private _tipo: number;
  private _itemNome: string;

  // Construtor das características da classe abstrata "Itens"
  constructor(
    itemEstoque: number,
    itemPreco: number,
    tipo: number,
    itemNome: string
  ) {
    this._itemNome = itemNome;
    this._itemPreco = itemPreco;
    this._tipo = tipo;
    this._itemEstoque = itemEstoque;
  }

  // Encapsulamento com Get e Set do atributo "itemNome"
  public get itemNome(): string {
    return this._itemNome;
  }
  public set itemNome(value: string) {
    this._itemNome = value;
  }

  // Encapsulamento com Get e Set do atributo "itemPreco"
  public get itemPreco(): number {
    return this._itemPreco;
  }
  public set itemPreco(value: number) {
    this._itemPreco = value;
  }

  // Encapsulamento com Get e Set do atributo "itemEstoque"
  public get itemEstoque(): number {
    return this._itemEstoque;
  }
  public set itemEstoque(value: number) {
    this._itemEstoque = value;
  }

  // Encapsulamento com Get e Set do atributo "tipo"
  public get tipo(): number {
    return this._tipo;
  }
  public set tipo(value: number) {
    this._tipo = value;
  }

  public mostrar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Item Normal"
        break;
      case 2:
        tipo = "Item Magico"
        break;
      case 3:
        tipo = "Item Especial"
        break;
      case 4:
        tipo = "Pet/Montaria"
        break;
      default:
        tipo = "Sem tipo definido"
        break;
    }

    console.log(`${this.itemNome} | Preco: $ ${this.itemPreco}`);
    console.log(`Estoque: ${this.itemEstoque}`);
  }

}
