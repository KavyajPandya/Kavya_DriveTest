const mongoose = require('mongoose')
//const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;
const Appointment = new Schema({
    date: { type: Date },
    time: { type: String },
    isTimeSlotAvailable: {type: Boolean, default: true},    
  });

const appointement = mongoose.model('appointement', Appointment) 
module.exports = appointement