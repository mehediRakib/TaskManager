const mongoose=require('mongoose');

let dataModel=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    otp:{type:String,required: true}
},
    {
        timestamps:true,versionKey:false
    }
    )
let userModel=mongoose.model('users',dataModel)

module.exports=userModel;