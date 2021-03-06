const express = require('express');
const {userById,allusers,getUser, updateUser,deleteUser, isUser} = require("../controllers/user");
const router =express.Router();
const {requireSignin} = require("../controllers/auth");



router.get('/users', allusers);
router.get('/user/:userId',requireSignin,getUser);
router.put('/user/:userId',requireSignin,isUser,updateUser);
router.delete('/user/:userId',requireSignin,deleteUser);

//any route containing: userId, our app will first execute userById()
router.param("userId", userById);




module.exports = router;