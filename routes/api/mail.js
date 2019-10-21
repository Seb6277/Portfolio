const express = require('express');
const router = express.Router();

router.post("/send_mail", function(req, res) {

    // Send email here

    res.status(200).json("Email sent").end();
});

module.exports = router;