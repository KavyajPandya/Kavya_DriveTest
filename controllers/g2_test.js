const UserData = require('../models/userdata_model')
const appointements = require('../models/appointement_model')

module.exports = async(req, res) =>{  
    if (user_type !== 'Driver') {
        console.log("only user type: driver can access this page! ")
        res.redirect('/');
        res.send('<script>alert("only user type: driver can access this page!")</script>');
        return;
    }
    userdata = await UserData.findById(loggedIn);
    console.log(userdata)    
    if(userdata.License_No === "default"){
    //     res.render('g2_test', {
    //         userdata: {
    //             License_No: 'default'
    //         }
    //     })

    res.render('g2_test', {
        userdata: {
            firstname: '',
            lastname: '',
            License_No: 'default',
            Age: '',
            username: '',
            password: '',
            usertype: '',
            car_details:{
                make: '',
                model: '',
                year: '',
                platno: ''
            }                    
        }, idDefault: true, 
    })
    //res.render('g2_test',{userdata: userdata})
    }else{
        //res.render('g2_test')
        const today = new Date();  
        const todayDate = `${today.getFullYear().toString()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDate().toString().padStart(2,'0')}`        
        console.log(" not default")
        // const availableSlots = await appointements.find({date: todayDate}) 
        // console.log(availableSlots);  
        //res.render('g2_test', {userdata: userdata,idDefault: false, todayDate, availableSlots: availableSlots })
        res.render('g2_test', {userdata: userdata,idDefault: false, todayDate, availableSlots: null })

        //res.render('g2_test', {userdata: null})
    }  

}