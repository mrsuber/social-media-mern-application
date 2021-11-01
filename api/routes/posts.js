const {getUsersAllPost,createPost,updatePost,deletePost,getSinglePost,getAllPost,likePost,dislikePost,getTimelinePost} = require("../controllers/posts")

const router = require("express").Router()

router.post("/",createPost)
router.put("/:id",updatePost)
router.delete("/:id",deletePost)

router.get("/:id",getSinglePost)
router.get("/",getAllPost)
router.get("/timeline/:userId",getTimelinePost)
router.get("/profile/:username",getUsersAllPost)

router.put("/:id/like",likePost)
router.put("/:id/dislike",dislikePost)

module.exports = router
