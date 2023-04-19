const mongoose=require("mongoose");

const customerSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    cnumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    badd:{
        type:String

    },
    sadd:{
        type:String
    },
    typej:{
        type:String,
        required:true,
    },
    metal:{
        type:String,
        required:true,
    },
    size:{
        type:Number,
        required:true,
    },
    budget:{
        type:Number,
        required:true,
    },
    special_requests:{
        type:String,
        required:true,
    }
})

// collection creation
const Users=new mongoose.model("UsersList",customerSchema);

module.exports=Users;