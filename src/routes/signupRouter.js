const express = require('express');
const signupRouter = express.Router();
const signup = require('../model/login')

function router(navbar){
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            navbar,
            title:'Library',
        });
    });
    signupRouter.post("/register",function(req,res){
        var item = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            username : req.body.username,
            phoneno : req.body.phoneno,
            password : req.body.password
        }
       var sign = signup(item);
       sign.save();
       res.redirect('/');
    });
    return signupRouter;
}
module.exports = router;