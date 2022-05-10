const mongoose = require('mongoose')

const StudImageSchema = mongoose.Schema({
    name:{
        type:String,
    },
    image:[]
    // productImage:[],
    
})
module.exports=mongoose.model("StudImage",StudImageSchema)