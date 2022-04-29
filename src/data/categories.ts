import { Category } from "../types/Category"

export const categories: Category = {
  food: { title: 'Alimentação', color: '#ff6363', isExpense: true },
  transport: { title: 'Transporte', color: 'green', isExpense: true },
  fun: { title: 'Lazer', color: 'yellow', isExpense: true },
  health: { title: 'Saúde', color: 'purple', isExpense: true },
  salary: { title: 'Salário', color: '#5789ff', isExpense: false },
  vasco: { title: 'Vasco', color: 'grey', isExpense: true },
}