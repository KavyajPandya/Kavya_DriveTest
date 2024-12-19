const UserData = require('../models/userdata_model')
module.exports = async (req, res) =>{
    if (user_type !== 'Driver') {
        console.log("only user type: driver can access this page! ");
        res.redirect('/');
        // res.send('<script>alert("only user type: driver can access this page!")</script>');
        return;
    }    
    userdata = await UserData.findById(loggedIn); 
    console.log(userdata)
    if(userdata.License_No === "default"){
        //res.send('<script>alert("plz fill info from g2 page!");</script>');
        //alert("plz fill info from g2 page!");
        res.render('g_test',  {fillInfo: "Please fill your details in the G2 Page first"} )
        //res.redirect('g2_test');
        // res.render('g2_test', {
        //     userdata: {
        //         firstname: '',
        //         lastname: ""
        //     }
        // })
    }else{
        res.render('g_test', {fillInfo: null, userdata: userdata})
    }  
}