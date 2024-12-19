const UserData = require('../models/userdata_model')
module.exports = async(req, res) => {
  try {               
      const UpdatedUserData = {
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
  if(loggedIn){
      console.log("logged in value" + loggedIn)
      const user = await UserData.findByIdAndUpdate(loggedIn, UpdatedUserData); 
      console.log(user)
      if(user){
          res.redirect("/");
          console.log("in g update with id post method")
      }
  }
  // const user = await UserData.findByIdAndUpdate(req.params.id, UpdatedUserData);
  //console.log(req.params.id)
  
  } catch (error) {
      console.error("Error updating car details:", error);
      res.status(500).send("Error updating car details");
  }
}