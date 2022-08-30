const express = require('express');

const router = express.Router();
const MyUserController = require("../controllers/MyUserController.js")
const auth = require("../middleware/auth")


router.post('/createUser', MyUserController.CreateUser);

router.post('/login', MyUserController.login)


router.get('/user/:userId',auth.authentication, MyUserController.user)


router.delete('/user/:userId',auth.authentication, MyUserController.userDelete)



router.put('/update/:userId',auth.authentication, MyUserController.updateData)



















module.exports = router;

// adding this comment for no reason