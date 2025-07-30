
const express = require("express")

const getContact = require("../controllers/contactfun");
const isVerifyUser = require("../middleware/isverifyUser");
const router= express.Router()


 router.post('/send', isVerifyUser,  getContact)
 
   












module.exports = router;