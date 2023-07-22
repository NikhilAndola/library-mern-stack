const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render('index')
})

// router.get("/mango", (req,res) => res.send("Mango route"))

module.exports = router