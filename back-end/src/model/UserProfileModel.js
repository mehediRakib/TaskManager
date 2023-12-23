const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,required: true},
    name:{type:"String",required:true},
    city:{type:String,required:true},
    phone:{type:String,required:true},
    country:{type:String,required:true}
}
,
 {
        timestamps:true,versionKey:false
 }
 )

const ProfileModel=mongoose.model('userProfiles',DataSchema);

module.exports=ProfileModel;