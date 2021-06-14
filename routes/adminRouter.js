const express = require("express");
const router = express.Router();
const auth = require("../controlers/authController");

router.get("/",auth,(req,res)=>{
    if(req.user.admin) {
    res.send("Esse dado só deve ser visto pelo ADM")
    }
    else {
    res.status(401).send("Not admin: Access Denied");
    }
});


module.exports = router;