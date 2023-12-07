export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value: number): void => {
    this.balance = this.balance + value
    console.log(
      `Você fez um deposito de R$${value}.\nSeu saldo atual é de R$${this.balance}`
    )
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      this.balance = this.balance - value
      console.log(
        `Você sacou R$${value}.\nSeu saldo atual é de R$${this.balance}`
      )
    } else {
      console.log(
        `Saldo insuficiente para fazer o saque !\nFaltam R$${
          value - this.balance
        } para fazer o saque desejado.`
      )
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida !')
  }
}
