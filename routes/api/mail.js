const express = require('express');
const router = express.Router();

const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

router.post("/send_mail", function(req, res) {

    const request = mailjet.post('send').request({
        FromEmail: 'sebastien.carpentier89@gmail.com',
        FromName: 'Mailjet Pilot',
        Subject: 'contact',
        'Text-part': `${req.body.userMail} written :
        ${req.body.message}`,
        Recipients: [{Email: 'sebastien.carpentier89@gmail.com'}]
    })

    request.then(result => {
        res.status(200).json({success: true}).end()
    }).catch(error => {
        res.status(500).json({sucess: false, log: error}).end()
    })
});

module.exports = router;