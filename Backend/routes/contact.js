const nodemailer = require("nodemailer");
const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();

// global variable dotenv for sensitive data protection
dotenv.config({path: "./config/config.env"});

router.post("/", (req, res) => {
   const { firstname, lastname, email, message } = req.body;
   
   const output = `
   <div>
      <h1>Contact Form Message</h1>
      <hr/>
      <h3>Sender Details</h3>
      <ul>
         <li>First Name: ${firstname}</li>
         <li>Last Name: ${lastname}</li>
         <li>Email: ${email}</li>
      </ul>
      <div>
         <h4>Message:</h4>
         <p>${message}</p>
      </div>
   </div>`;

   let auth = {
      type: 'oauth2',
      user: process.env.MY_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
   };
  
   let mailOptions = {
      from: 'ademuyiwadapo@gmail.com',
      to: 'ademuyiwadapo@gmail.com',
      subject: 'Portfolio Website Contact',
      text: "firstname, lastname, email",
      html: output
   };
  
   let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth,
   });
  
   transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
          return console.log(err);
      } else {
          console.log(JSON.stringify(res));
      }
   });     
});

module.exports = router;