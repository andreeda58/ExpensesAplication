const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    id: Number,
    storeName: String,
    totalExpense: Number,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    date: Date

})

const Expenses = mongoose.model("Expenses", ExpenseSchema)


module.exports = Expenses;