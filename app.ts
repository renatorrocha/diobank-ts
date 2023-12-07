import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 1)
peopleAccount.deposit(10)
peopleAccount.deposit(20)
peopleAccount.withdraw(40)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
companyAccount.getLoan(300)
console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount('Renato', 2)
specialAccount.SpecialDeposit(10)
console.log(specialAccount)
