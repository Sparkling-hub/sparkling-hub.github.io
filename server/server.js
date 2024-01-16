"use strict";
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const { body, validationResult } = require("express-validator");
const helmet = require("helmet");

const app = express();
const port = 3033;

const storage = multer.memoryStorage(); 
const upload = multer({ 
    storage,
    limits: {
        fileSize: 10000000
      }
 }).single('file');
 

app.use(express.json());
app.use(cors());
app.use(upload);

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'careers.sparkling.co@gmail.com',
        pass: 'tuuj ioas vyjh vywx',
    },
    secure: true,
    requireTLS: true,
    port: 465,
    secured: true
});

app.use(helmet.hidePoweredBy());

const validateForm = [
    body('formData.name').isLength({ min: 0, max: 255 }).withMessage('Name is required and must be less than 255 characters'),
    body('formData.email').isEmail().withMessage('Valid email is required'),
    body('formData.message').isLength({ min: 0, max: 2000 }).withMessage('Message is required and must be less than 2000 characters'),
    body('formData.company').isLength({ max: 255 }).withMessage('Company must be less than 255 characters'),
    body('formData.select').isLength({ max: 255 }).withMessage('Select must be less than 255 characters'),
];

app.post('/send-form', validateForm, (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, message, company, select } = req.body.formData;

    const mailOptions = {
        from: 'careers.sparkling.co@gmail.com',
        to: 'l.arthofer@sparkling.co.com',
        subject: `${select} From: ${email}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nText: ${message}`,
        attachments: [],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`errorSend: ${error}`);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
