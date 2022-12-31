const express = require('express');
const {getPosts,createPost,privatePostedByUser,publicPostedByUser,postById,isPoster,deletePost, updatePost, getPostByPostId, getPostPhoto} = require("../controllers/post");
const router =express.Router();
const {createPostValidator} = require('../validator');
const {requireSignin} = require("../controllers/auth");
const {userById,isUser} = require("../controllers/user");
router.delete("/post/:postId",requireSignin,isPoster,deletePost)
router.get('/posts/:userId',requireSignin,getPosts);




router.post(
    '/post/new/:userId',
    requireSignin,
    isUser,
    createPost,
    createPostValidator);
router.get("/posts/by/private/:userId",requireSignin,isUser,privatePostedByUser);
router.get("/posts/by/public/:userId",publicPostedByUser);
router.get("/post/:postId",getPostByPostId)
router.get("/post/photo/:postId/:photoName",getPostPhoto)
router.put('/post/:postId', requireSignin,isPoster,updatePost)
 
//any route containing: userId, our app will first execute userById()
router.param("userId", userById);

router.param("postId", postById);
module.exports = router;

