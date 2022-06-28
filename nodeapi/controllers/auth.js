const jwt = require('jsonwebtoken')
require('dotenv').config()
const expressJwt = require('express-jwt');
const User = require('../models/user');
const { sendEmail } = require('../tools/mailService');



exports.signup = async (req, res) =>{
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(403).json({
        error: "Email is taken!"
    })
    const user = await new User(req.body)

    await user.save()
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
    //generate a token with user id and secret
        const token = jwt.sign({user},process.env.JWT_SECRET);
    //persist the token as 't' in cookie with expiry date
        res.cookie("token",token,{maxAge:24*60*60*1000});
        
        

    //return response with user and token to frontend client
        const {_id,name,email,role} = user
        return res.json({token, user: { _id,email, name, role}});
    });



};

exports.signout = (req,res) => {
    res.clearCookie("t")
    
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
   
    
    
    // const authHeader = req.header('authorization').split(' ')[1]
    
    const token = req.cookies.token;
    if(!token){
        res.Status(401).json({
            message:'token not found'
        })
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
        if(err) return res.status(403)
        
        res.json({data})
    })
    
    return res.json({
        message: 'nihao',
    })
}