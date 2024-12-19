const appointements = require('../models/appointement_model')
const UserData = require('../models/userdata_model')

module.exports = async(req, res) =>{  
    console.log("show apointement clicked")
    //const today = new Date();  
    // const todayDate = `${today.getFullYear().toString()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDate().toString().padStart(2,'0')}`
    // const availableSlots = await appointements.find({date: todayDate}) 
    // console.log(availableSlots);  
    // const selectedDate = {
    //     date: req.body.date
    // }
    // console.log(selectedDate);
    const availableSlots = await appointements.find({date: req.body.date})
    console.log("returned" + availableSlots);
    //res.redirect('/');
    
    res.render('g2_test', {userdata, idDefault: false, todayDate: null, availableSlots: availableSlots})
}