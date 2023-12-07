import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 1)
peopleAccount.deposit(10)
peopleAccount.deposit(20)
peopleAccount.withdraw(40)
// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit()
// console.log(companyAccount)
