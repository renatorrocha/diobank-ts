// Feito por Renatorrocha

import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

console.log(
  '******************************** PeopleAccount ********************************'
)
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 1)
peopleAccount.deposit(20)
peopleAccount.withdraw(10)

console.log(
  '******************************** CompanyAccount ********************************'
)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
companyAccount.withdraw(10)
companyAccount.getLoan(300)

console.log(
  '******************************** VipAccount ********************************'
)
const vipAccount: VipAccount = new VipAccount('Renato', 2)
vipAccount.VipDeposit(10)
vipAccount.deposit(20)
vipAccount.withdraw(20)
