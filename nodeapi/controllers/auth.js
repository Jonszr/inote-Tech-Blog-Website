const jwt = require('jsonwebtoken')
require('dotenv').config()
const expressJwt = require('express-jwt');
const User = require('../models/user');
const { sendEmail } = require('../tools/mailService');
const fs = require('fs');



exports.signup = async (req, res) =>{
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(403).json({
        error: "Email is taken!"
    })
    const user = await new User(req.body)
    await user.save()

    // Email service
    const { email } = req.body;
    const emailData = {
        from: 'noreply@postWeb.com',
            to: email,
            subject: `Welcome ${user.name}`,
            text: 'Sign up successful!!',
            html: 'nothing..'
    }
    sendEmail(emailData);

    res.status(200).json({message:"Signup success! Please login."});
}

exports.signin =(req,res) => {
    
    //find the user based on email
    const{email,password} = req.body
    console.log(req.body)
    User.findOne({email},(err,user)=>{
        
        //if err or no user
        if(err || !user){
            return res.status(401).json({
                error:"User with that email does not exist. Please signup."
            })
        }
        //if user is found make sure the email and password match
        //create authenicate method in model and use here
        if(!user.authenticate(password)){
            return res.status(401).json({
                error:"Email and password do not match"
            })
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        console.log(user)
        
    //generate a token with user id and secret
        jwt.sign({user},process.env.JWT_SECRET,{expiresIn:'24h'},(err,data)=>{
            if(err){
                return res.status(404).json(err)
            }
            return res.json({token:data,user,exp:Date.now()+1000*60*60*24})
        });
    //persist the token as 't' in cookie with expiry date
        // res.cookie("token",token,{maxAge:24*60*60*1000});
        
        

    //return response with user and token to frontend client
        
        // return res.json({token, user});
    });



};

exports.signout = (req,res) => {
    res.clearCookie("token")
    console.log(res.headers['authorization'])
    return res.json({message: "Signout success!"})
}

exports.requireSignin = expressJwt({
    //if the token is vaild, express jwt appends the verified users id
    // in an auth key to the request object
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
    userProperty: "auth"
})

exports.getUserByToken = (req,res) => {
   
    console.log('yes..here');
    try {
        const token = req.headers.cookies;
        console.log(req.headers.cookies)
    if(!token){
        res.status(401).json({
            message:'token not found'
        })
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
        if(err) return res.status(403)
        
        return res.json({data})
    })
    
    
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            error
        })
    }
    
    // const authHeader = req.header('authorization').split(' ')[1]
    
    
}

// exports.isUser = (req,res,next)=>{
//     let sameUser = req.auth&& req.profile&&req.profile._id === req.auth.user._id;
//     console.log(req.profile._id, req.auth.user._id)
//     console.log(sameUser)
//     if(!sameUser){
//         return res.status(400).json({
//             error: "User is not authorized"
//         })
//     }
//     next();
// }