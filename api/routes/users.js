const router = require("express").Router()
const {updateuser,deleteuser,getoneuser,updatefollowings,getallusers,unfollow} = require("../controllers/users")


router.put("/:id",updateuser)
router.delete("/:id",deleteuser)
router.get("/:id",getoneuser)
router.get("/",getallusers)
router.put("/:id/follow",updatefollowings)
router.put("/:id/unfollow",unfollow)

module.exports=router
