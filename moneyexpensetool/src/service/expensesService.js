import http from "./httpService";

const serverRoute = "/api/Expenses/";

const ExpensesService = {

  async addExpenses(expense) {
    return await http.post(serverRoute + "addExpenses", expense);
  },

  async getExpensesByUserId(id) {
    return await http.get(serverRoute + `getExpensesByUserId/${id}`);
  },

  async getSumExpensesByDates(dates) {
    return await http.post(serverRoute + `getSumExpensesByDates`, dates);
  },

  async getExpensesByDates(dates) {
    return await http.post(serverRoute + `getExpensesByDates`, dates);
  },

  async updateExpense(id,newExpense){
    return 	await http.put(`${serverRoute}updateExpense/${id}`, newExpense);
  },

  async deleteExpense(id){

    return 	await http.delete(`${serverRoute}deleteExpense/${id}`) ;
  }

}

export default ExpensesService;