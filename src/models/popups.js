const mongoose=require("mongoose");

const popupSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        unique:true
    }
})

// collection creation
const Popups=new mongoose.model("Login",popupSchema);

module.exports=Popups;