const UserData = require('../models/userdata_model')
const appointements = require('../models/appointement_model')

module.exports = async (req, res) => {    
    try{    
        const appointementData = await appointements.findOne({
            date:req.body.date,
            time: req.body.AppointmentTime
        });

console.log(req.body.date,req.body.appointementTime )
         const ReceivedUserData = {
        appointmentId: appointementData._id,
         firstname: req.body.fname,
         lastname: req.body.lname,
         License_No: req.body.liscense_no,
         Age: req.body.age,
         car_details: {
         make: req.body.make,
         model: req.body.model ,
         year: req.body.year,
         platno: req.body.plat_num 
     }
     }
     console.log(ReceivedUserData);
     // if(ReceivedUserData.License_No !== "default"){
     //     console.log(ReceivedUserData);
     //     res.render('g2_test')
     //     }
     const rdatasent = await UserData.findByIdAndUpdate(loggedIn, ReceivedUserData );    
     //res.render('g2_test', {userdata: userdata})
     if(rdatasent){
        const appointmentUpdate = await appointements.findByIdAndUpdate(appointementData._id,{isTimeSlotAvailable:false});
     }
     res.redirect("/");
     }catch(err){
     console.error("Error creating user data", err)
         res.status(500).send("Error creating the user data");
    }     
 }