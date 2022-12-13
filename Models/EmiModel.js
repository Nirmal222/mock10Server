const { Schema, model } = require("mongoose");

const emiSchema = new Schema({
    userId:{ type:Schema.Types.ObjectId, ref:"user" },
    loanamount:{type:Number},
    anualInrestRate:{type:Number},
    tenureInMonths:{type:Number},
    emiAmount: { type:Number }
})

const emiModel = model("emi", emiSchema);

module.exports = emiModel;