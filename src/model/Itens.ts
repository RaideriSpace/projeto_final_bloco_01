// Exportação da classe abstrata "Itens"
export abstract class Itens {
  // Declaração das características privadas da classe abstrata "Itens"
  private _itemID: number;
  private _itemEstoque: number;
  private _itemPreco: number;
  private _tipo: number;
  private _itemNome: string;
  private _itemDono?: string;

  // Construtor das características da classe abstrata "Itens"
  constructor(
    itemID: number,
    itemEstoque: number,
    itemPreco: number,
    tipo: number,
    itemNome: string,
    itemDono?: string
  ) {
    this._itemID = itemID;
    this._itemNome = itemNome;
    this._itemPreco = itemPreco;
    this._tipo = tipo;
    this._itemEstoque = itemEstoque;
    this._itemDono = itemDono;
  }

  // Encapsulamento com Get e Set do atributo "itemID"
  public get itemID(): number {
    return this._itemID;
  }
  public set itemID(value: number) {
    this._itemID = value;
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

  // Encapsulamento com Get e Set do atributo "itemDono"
  public get itemDono(): string | undefined {
    return this._itemDono;
  }
  public set itemDono(value: string | undefined) {
    this._itemDono = value;
  }

  public mostrar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Item Normal";
        break;
      case 2:
        tipo = "Item Magico";
        break;
      case 3:
        tipo = "Item Especial";
        break;
      case 4:
        tipo = "Pet/Montaria";
        break;
      default:
        tipo = "Sem tipo definido";
        break;
    }

    console.log(`ID: ${this.itemID} - ${this.itemNome}`);
    console.log(
      `Preco: $ ${this.itemPreco.toFixed(2)} | Estoque: ${this.itemEstoque}`
    );
    if (this.itemDono != undefined) {
      console.log(`Vendedor: ${this._itemDono}`);
    } 
  }

  public removerEstoque(value: number): void{
    if (this.itemEstoque >= value) {
      this.itemEstoque -= value;
    } 
  }
}
