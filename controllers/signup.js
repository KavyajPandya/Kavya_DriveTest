const UserData = require('../models/userdata_model')
module.exports = (req, res) =>{
    res.render('signup', {errMsg: null});
}