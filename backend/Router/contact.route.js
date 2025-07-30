
const express = require("express")

const getContact = require("../controllers/contactfun")
const router= express.Router()


 router.post('/send', getContact)
 
   












module.exports = router;