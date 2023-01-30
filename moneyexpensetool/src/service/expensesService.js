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
  }

}

export default ExpensesService;