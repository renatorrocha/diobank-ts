export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    this.balance = this.balance + value
    console.log(
      `Você depositou ${value}, seu saldo atual é de R$${this.balance}`
    )
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      this.balance = this.balance - value
    } else {
      console.log(
        `Saldo insuficiente para fazer o saque !\n Faltam ${
          value - this.balance
        } para fazer o saque desejado`
      )
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
