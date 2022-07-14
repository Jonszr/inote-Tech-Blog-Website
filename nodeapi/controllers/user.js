const _ = require("lodash");
const User = require("../models/user");
const formidable = require("formidable");
const fs = require("fs");


exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found",
            });
        }
        
       
        
        req.profile = user;
        next();
    });
};

exports.isUser = (req, res, next) => {
    console.log('hello')
    console.log(req.profile._id.toString(),req.auth);
    const authorized = req.profile && req.auth && req.profile._id.toString() === req.auth.user._id;

    
    if (!authorized) {
        return res.status(403).json({
            error: "User is not authorized to perform this action",
        });
    }
    next();
};

exports.allusers = (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.json({ users });
    }).select("name email updated created");
};
exports.getUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.updateUser = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
       

        
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded",
            });
        }
        let user = req.profile;
        try {
           
            if (files.photo) {
                user.photo.data = fs.readFileSync(files.photo.filepath);
                user.photo.contentType = files.photo.mimetype;
            }
            
        } catch (error) {
           console.log(error) 
        }
        
        user = _.extend(user, fields);
        user.updated = Date.now();
        user.save((err) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to perform this action",
                });
            }
            user.hashed_password = undefined;
            user.salt = undefined;
            res.json({ user,msg:"update successfully!" });
        });

    });
    // let user = req.profile;
    // user = _.extend(user,req.body);
    // // extend -mute the source the source object
    // user.updated =Date.now();
    // user.save((err)=> {
    //     if(err) {
    //         return res.status(400).json({
    //             error:"You are not authorized to perform this action"
    //         })
    //     }
    // user.hashed_password = undefined;
    // user.salt = undefined;
    // res.json({user});
    // });
};

exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json({
            message: "User deleted successfully",
        });
    });
};
