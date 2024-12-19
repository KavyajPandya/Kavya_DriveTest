const appointments = require("../models/appointement_model.js");

module.exports = async(req,res) => {
    const gotDate = new Date(req.params.date);
    const slots = await appointments.find({
        date: gotDate,
        isTimeSlotAvailable: true,
      });
      const timeSlots = slots.map((slot) => slot.time);
      timeSlots.sort();
      res.json({timeSlots:timeSlots});
    }
      