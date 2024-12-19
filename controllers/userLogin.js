const UserData = require('../models/userdata_model')
const bcrypt = require('bcrypt')

module.exports = async(req, res) =>{
    console.log(" Login btn clicked");
    try{
        const userLoginData = {
            username: req.body.name,
            password: req.body.password,            
        }
        console.log(userLoginData);
        const userLoginDataSent = await UserData.findOne({username: userLoginData.username} ); 
        console.log(userLoginDataSent);
        if(userLoginDataSent){
            console.log("logged in");
            //res.redirect('/')
            const password = userLoginData.password
            const validPassword = await bcrypt.compare(password, userLoginDataSent.password)
            if(validPassword){
                req.session.userid= userLoginDataSent._id
                req.session.usertype = userLoginDataSent.usertype
                res.redirect('/')
            }
            else{             
                console.log("invalid password")   
                //res.redirect('/login')
                res.render('login', {errMsg:null, invalidPwd: "Incorrect Password! "})
            }
        }
        else{
            res.render('login', {errMsg: "User does not exist, please sign in first", invalidPwd: null })
            console.log("User does not exist");
        }

    }
    catch(err){
        console.error("Error loging in", err)
    }
     
}