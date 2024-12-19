const UserData = require('../models/userdata_model')
module.exports = async(req, res) => {
    console.log(" Signup btn clicked");
    let checkUsername = {
        username: req.body.name,        
    }
    console.log(checkUsername);
    const abc = await UserData.findOne(checkUsername);
    console.log(abc);   
    if(abc){
        console.log("Username already taken, Please try a different username!")
        res.render('signup', {errMsg: "Username already taken, Please try a different username !"}) 
    }
    else{
        console.log("username works")
        if(req.body.password == req.body.rpassword){
            console.log(req.body.password);
            console.log(req.body.rpassword);
            console.log("match")
            try{
                const userSignupData = {
                    username: req.body.name,
                    password: req.body.password,
                    usertype: req.body.usertype
                }
                console.log(userSignupData);
                const usersignupDataSent = await UserData.create(userSignupData); 
                console.log(usersignupDataSent);        
            }
            catch(err){
                console.error("Error signing in", err)
            }
            res.redirect('/login') 
        }
        else{
            console.log(req.body.password);
            console.log(req.body.rpassword);
            console.log("no match")
            res.render('signup', {errMsg: "Passwords do not match !"}) 
        }
    }
    
    
}