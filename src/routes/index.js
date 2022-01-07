const { Router } = require("express");
const res = require("express/lib/response");
const nodemailer = require("nodemailer");
const path = require("path");
const { emailSend, passwordSend } = require("../config.js");

const router = Router();

router.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

router.post("/send-email", (req, res) => {
  const { sender, addressee, subject, message } = req.body;

  //Ethereal's User
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: emailSend,
      pass: passwordSend,
    },
  });

  // transporter.verify().then(() => {
  //   console.log("Ready for send emails")
  // })

  //Email Settings
  const mailOptions = {
    from: `"${sender}:" <${sender}>`,
    to: addressee,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("Message sended successfully to: ", addressee);
      res.redirect("/success");
      // res.status(200).jsonp(req.body);
    }
  });
  res.send(`<script>alert("Message sended successfully to: ${addressee}"); window.location.href = "/"; </script>`);
});

module.exports = router;
