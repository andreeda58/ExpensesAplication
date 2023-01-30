
const Expenses = require("../models/expense");

class ExpensesController {
    async addExpenses(expense) {

        const newExpenseMongo = new Expenses({

            storeName: expense.storeName,
            totalExpense: expense.totalExpense,
            user: {
                _id: "62114325301333f10ad0d766"
            },
            date: expense.date
        })

        await newExpenseMongo.save()
        return newExpenseMongo;
    }

    async getExpensesByUserId(id) {
        return await Expenses.findById(id);
    }

    async getSumExpensesByDates(Dates) {

        let sum = 0;
        const expensesByDates = await Expenses.find({ date: { $gte: new Date(Dates.startDate), $lt: new Date(Dates.expireDate) } })
        if (expensesByDates != []) {
            expensesByDates.forEach(element => {
                debugger
                sum = sum + element._doc.totalExpense;
            });
        }
        return { sum: sum }
    }

    async getExpensesByDates(Dates) {
        const expensesByDates = await Expenses.find({ date: { $gte: new Date(Dates.startDate), $lt: new Date(Dates.expireDate) } })

        return expensesByDates
    }
}

module.exports = new ExpensesController();