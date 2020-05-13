const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    servingSize:{
        type:String,
        required:true
    },
    calories:{
        type:Number,
        required:true
    },
    fat:{
        type:Number,
        required:true
    },
    protein:{
        type:Number,
        required:true
    },
    carbs:{
        type:Number,
        required:true
    },
    fiber:{
        type:Number,
        required:true
    },
    sugar:{
        type:Number,
        required:true
    },
    image: 
      { data: Buffer, contentType: String }
});

module.exports= mongoose.model('Food',foodSchema);