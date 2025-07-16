import { Conta } from "../model/Conta";

export interface ContaRepository {
  mudarConta(conta: Conta): void;

  depositar(valor: number): void;
}
