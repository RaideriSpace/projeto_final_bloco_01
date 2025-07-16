// Exportação da classe "Conta"
export class Conta {
  // Declaração das características privadas da classe "Conta"
  private _usuario: string;
  private _saldo: number;
  private _nivelConta: number;

  // Construtor das características da classe "Conta"
  constructor(usuario: string, saldo: number, nivelConta: number) {
    this._usuario = usuario;
    this._saldo = saldo;
    this._nivelConta = nivelConta;
  }

  // Encapsulamento com Get e Set do atributo "usuario"
  public get usuario(): string {
    return this._usuario;
  }
  public set usuario(value: string) {
    this._usuario = value;
  }

  // Encapsulamento com Get e Set do atributo "saldo"
  public get saldo(): number {
    return this._saldo;
  }
  public set saldo(value: number) {
    this._saldo = value;
  }

  // Encapsulamento com Get e Set do atributo "nivelConta"
  public get nivelConta(): number {
    return this._nivelConta;
  }
  public set nivelConta(value: number) {
    this._nivelConta = value;
  }

  // Função especifica de depositar.
  public depositar(value: number): void {
    this._saldo += value;
  }

  public debito (value: number): void {
    this._saldo -= value;
  }
}
