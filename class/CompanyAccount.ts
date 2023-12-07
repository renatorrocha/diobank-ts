import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      const balance = this.getBalance() + value
      this.setBalance(balance)
      console.log(
        `Você pegou um emprestimo de R$${value}.\nSeu saldo total é de R$${balance} `
      )
    } else {
      console.log('Conta inválida !')
    }
  }
}
