const express = require('express');
const {getPosts,createPost,postedByUser,postById,isPoster,deletePost, updatePost} = require("../controllers/post");
const router =express.Router();
const {createPostValidator} = require('../validator');
const {requireSignin} = require("../controllers/auth");
const {userById,isUser} = require("../controllers/user");

router.get('/posts/:userId',requireSignin,getPosts);




router.post(
    '/post/new/:userId',
    requireSignin,
    isUser,
    createPost,
    createPostValidator);
router.get("/posts/by/:userId",requireSignin,isUser,postedByUser);
router.delete("/post/:postId",requireSignin,isPoster,deletePost)
router.put('/post/:postId', requireSignin,isPoster,updatePost)
 
//any route containing: userId, our app will first execute userById()
router.param("userId", userById);

router.param("postId", postById);
module.exports = router;

