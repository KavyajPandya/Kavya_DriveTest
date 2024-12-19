const UserData = require('../models/userdata_model')
module.exports = async(req, res) => {
    req.session.destroy()
    console.log("session variable destroyed")
    res.redirect('/')
}