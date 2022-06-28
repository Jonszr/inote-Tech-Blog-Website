const express = require('express');
const {getPosts,createPost,postedByUser,postById,isPoster,deletePost} = require("../controllers/post");
const router =express.Router();
const {createPostValidator} = require('../validator');
const {requireSignin} = require("../controllers/auth");
const {userById} = require("../controllers/user");

router.get('/',requireSignin,getPosts);
router.post(
    '/post/new/:userId',
    requireSignin,
    createPost,
    createPostValidator);
router.get("/posts/by/:userId",requireSignin,postedByUser);

 
//any route containing: userId, our app will first execute userById()
router.param("userId", userById);

router.param("postId", postById);
module.exports = router;

