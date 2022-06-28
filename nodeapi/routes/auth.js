const express = require('express');
const {signup,signin,signout,getUserByToken} = require("../controllers/auth");
const {userById} = require("../controllers/user");
const router =express.Router();
const {userSignupValidator} = require('../validator');


router.post('/signup',userSignupValidator,signup);
router.post('/signin',signin);
router.get('/signout',signout);
router.post('/auth',getUserByToken);

//any route containing: userId, our app will first execute userById()
router.param("userId", userById);




module.exports = router;