const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;
// create a schema
// const UserDataSchema = new Schema({
//     firstname: String ,
//     lastname: String,
//     License_No: String,
//     Age: Number,
//     car_details: {
//     make: String,
//     model: String ,
//     year: Number,
//     platno: String
// }
// });   
const UserDataSchema = new Schema({
  appointmentId:{type:mongoose.Schema.Types.ObjectId,ref:"appointment_model",default :null},
    firstname: { type: String, default: "default" },
    lastname: { type: String, default: "default" },
    License_No: { type: String, default: "default" },
    Age: { type: Number, default: 0 },
    username: { type: String, default: "demo" },
    password: { type: String, default: "demo" },
    usertype: { type: String, default: "Driver" },
    // dob: { type: Date, default: Date.now },
    car_details: {
      make: { type: String, default: "default" },
      model: { type: String, default: "default" },
      year: { type: Number, default: 0 },
      platno: { type: String, default: "default" },
    },
  });
      
  UserDataSchema.pre("save",function(next){
    const user = this;

    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password = hash;
        next();
    })
  });                    
const UserData = mongoose.model('userdata', UserDataSchema) 
module.exports = UserData