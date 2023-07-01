const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default: "Expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        maxLenght: 20,
        trim: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Expense',ExpenseSchema)