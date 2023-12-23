const express=require('express');
const router=express.Router();
const userController=require('../controller/UserController')
const authVerification=require('../middleware/AuthVerification');

router.post('/userOTP/:email',userController.userOTP);
router.get('/verifyLogin/:email/:otp',userController.verifyLogin)
router.get('/readProfile',authVerification,userController.readProfile);







module.exports=router;