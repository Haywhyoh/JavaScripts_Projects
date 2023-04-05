const Mongoose = require("mongoose")

Mongoose.set('strictQuery', false);

Mongoose.connect("mongodb+srv://adefeyisayo998:Mydreams@cluster0.nujcd7c.mongodb.net/?retryWrites=true&w=majority");
const userSchema = new Mongoose.Schema({
    username : {type:String, unique:true},
    password : {type:String, required:true, minlength:6}
}, {timestamps : true});

const userModel = Mongoose.model('User', userSchema);
module.exports = userModel;