const IncomeSchema = require("../models/IncomeModels");



exports.addIncome = async(req,res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        //validations
        if(!title || !category || !description){
            return res.status(400).json({message: "All fields are required"})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: "Please provide a Valid Number"})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    }
    catch(error){
        res.status(500).json({message: "All fields are required"})
    }
}