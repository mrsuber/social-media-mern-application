const router = require("express").Router()
const {getoneuserbyname,updateuser,deleteuser,getoneuser,updatefollowings,getallusers,unfollow} = require("../controllers/users")


router.put("/:id",updateuser)
router.delete("/:id",deleteuser)
router.get("/",getoneuser)
router.get("/:username",getoneuserbyname)

router.get("/",getallusers)
router.put("/:id/follow",updatefollowings)
router.put("/:id/unfollow",unfollow)

module.exports=router
