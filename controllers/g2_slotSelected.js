const appointements = require('../models/appointement_model')
module.exports = async(req, res) =>{  
    console.log("in select slot controller")
    // const slotAssigned = await appointements.findByIdAndUpdate({
    //     isbooked: true
    // });
    const selectedSlot = {        
        date: req.body.availableSlots
    }
    console.log(selectedSlot)

    const slotAssigned = await appointements.find({}).populate('userId');
    //const slotAssigned = await appointements.find({loggedIn}).populate('loggedIn');

    console.log(slotAssigned)
    res.redirect('/');
}