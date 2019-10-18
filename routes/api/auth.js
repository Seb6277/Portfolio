const express = require('express');
const router = express.Router();

router.post("/log", function(req, res) {
    if (req.body.email === process.env.AUTH_MAIL && req.body.passwd === process.env.AUTH_PASSWD) {
        res.status(200).json({auth: true}).end();
    } else {
        console.log("unauthorized request received");
        res.status(403).end();
    }
});

module.exports = router;