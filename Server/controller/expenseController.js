
const Expenses = require("../models/expense");

class ExpensesController {
    async addExpenses(expense) {

        const newExpenseMongo = new Expenses({

            storeName: expense.storeName,
            totalExpense: expense.totalExpense,
            user: {
                _id: process.env.USERID
            },
            date: expense.date,
            description: expense.description
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
                sum = sum + element._doc.totalExpense;
            });
        }
        return { sum: sum }
    }

    async getExpensesByDates(Dates) {
        const expensesByDates = await Expenses.find({ date: { $gte: new Date(Dates.startDate), $lt: new Date(Dates.expireDate) } })

        return expensesByDates
    }

    async updateExpenseById(id,newExpense){
        return await Expenses.updateOne({"_id": id},{$set:{...newExpense}})
    }

    async deleteExpenseById(id){
        console.log(id);
        return  await Expenses.deleteOne({'_id':id})
    }

    async getExpenseById(id){
        return  await Expenses.findOne({'_id' : id});
    }
}

module.exports = new ExpensesController();