const UserData = require('../models/userdata_model')
module.exports = (req, res) =>{
    res.render('login', {errMsg: null, invalidPwd: null})
}