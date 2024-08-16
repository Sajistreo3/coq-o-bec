const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });  // Allow all domains or specify like { origin: 'https://example.com' }

const { createEmailOptions } = require('./emailHelper');  // Import the helper module

// Configure Nodemailer with Gmail SMTP
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email, // Use environment config
    pass: functions.config().gmail.password
  }
});

// Firebase HTTP function to handle POST requests from your website form
exports.sendEmailFromForm = functions.https.onRequest((req, res) => {
  cors(req, res, () => {  // Handle CORS by wrapping the request handler
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');  // Only allow POST requests
    }

    // Create email options from the form inputs using the helper function
    const mailOptions = createEmailOptions(req.body.name, req.body.email, req.body.subject, req.body.message);

    // Send the email using Nodemailer
    return mailTransport.sendMail(mailOptions)
      .then(() => res.status(200).send('Email sent successfully.'))
      .catch(error => res.status(500).send(error.toString()));
  });
});
