import { DioAccount } from './DioAccount'

export class VipAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  VipDeposit(value: number): void {
    const balance = this.getBalance() + value + 10
    this.setBalance(balance)
    console.log(
      `Você fez um deposito especial de R$${value}, graças ao Vip foi acrescentado mais R$10,00 ao valor do deposito.\nSeu saldo total é de R$${balance}`
    )
  }
}
