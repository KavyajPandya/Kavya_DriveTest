// packages
const express= require('express')
const path = require('path')
const ejs = require("ejs") 
const mongoose = require("mongoose")
const UserData = require('./models/userdata_model')
const appointement = require('./models/appointement_model')
const app = new express()
const bcrypt = require('bcrypt')
let userdata = ""
const alert = require('alert')

// middleware
app.use(express.static('public')) 
app.set('view engine', 'ejs') 
app.use(express.json())
app.use(express.urlencoded())
const expressSession = require('express-session')
const dashboard = require('./controllers/dashboard')
const appointements = require('./controllers/appointements')
//const addAppointement  = require('./controllers/addAppointement')
const g2_testAppointement = require('./controllers/g2_testAppointement')
const g2_slotSelected = require('./controllers/g2_slotSelected')
const g2_test = require('./controllers/g2_test')
const g_test = require('./controllers/g_test')
const login = require('./controllers/login')
const userLogin = require('./controllers/userLogin')
const logout = require('./controllers/logout')
const signup = require('./controllers/signup')
const userSignup = require('./controllers/userSignup')
const g_update = require('./controllers/g_update')
const g2_submit = require('./controllers/g2_submit')
const displaySlots = require('./controllers/displaySlots')

app.use(expressSession({
    secret:"kavya"
  }));
  global.loggedIn = null;
  global.user_type = null;
  app.use("*",(req,res,next)=>{
    loggedIn = req.session.userid;
    user_type = req.session.usertype;
    next();
  });


// server port
app.listen(1800, ()=> {
    console.log('app is listenign port 1800')
})
// database connection 
mongoose.connect('mongodb+srv://kavyajpandya:pc6DWaVHdO1yZTN5@cluster0.mihchmx.mongodb.net/kavya_drivetest?retryWrites=true&w=majority');
// crud operation
// UserData.create({
//     firstname: "fnametry" ,
//     lastname: "lnametry",
//     License_No: "9a",
//     Age: 18,
//     car_details: {
//     make: "kia",
//     model: "Seltos" ,
//     year: 201,
//     platno: "gj27"
// }
// })

//Routes
app.get('/', dashboard)
app.get('/appointements', appointements)
//app.post('/appointement/addAppointement', addAppointement)
app.post('/g2_test/appointement', g2_testAppointement)
app.post('/g2_test/slotSelected', g2_slotSelected)
app.get('/g2_test', g2_test)
app.get('/g_test', g_test)
app.get('/login', login)
app.post('/login/userlogin', userLogin )
app.get('/logout', logout )
app.get('/signup', signup )
app.post('/signup/usersignup',userSignup )
// code to create userdata in mongodb when submit is clicked
app.post("/g2_test/submit", g2_submit);
app.get("/g2_test/:date",displaySlots);
// code to fetch details from mongodb when submit is clicked
// old method 
app.get("/g_test/submit", async (req, res) => {
    try{
        userdata = await UserData.findOne({
            License_No: req.query.liscense_no,
          })
          // code to redirect uder to g2 page is user is not found
          if(!userdata){
           console.log("User not found");
           res.render('g2_test');
          }
          else{
            // code to display details if liscense number is correct 
            console.log(userdata);
            console.log(req.query.liscense_no);
            res.render('g_test', {userdata: userdata});
            console.log("in g update controller with GET")
          }
        
          }catch(error){
              console.log(error)
          }
})
// code to update details from mongodb when update is clicked
app.post("/g_test/update/", g_update)