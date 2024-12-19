const appointements = require('../models/appointement_model')
module.exports = async (req, res) =>{   
    // validation to allow user to select a date only after today    
    const today = new Date();  
    const todayDate = `${today.getFullYear().toString()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDate().toString().padStart(2,'0')}`
    
    res.render('appointements',{ todayDate, errMsg: null })   

}