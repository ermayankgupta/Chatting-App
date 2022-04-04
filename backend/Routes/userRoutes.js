const express = require('express')
const router = express.Router()
const { registerUser, authUser, allUsers } = require("../controller/userController")
const {protect} = require("../middlewares/authMiddleware")

router.post("/login",authUser)
router.route("/").post(registerUser).get(protect,allUsers)


module.exports=router 