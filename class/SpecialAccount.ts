import { DioAccount } from './DioAccount'

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  SpecialDeposit(value: number): void {
    const balance = this.getBalance() + value + 10
    this.setBalance(balance)
  }
}
