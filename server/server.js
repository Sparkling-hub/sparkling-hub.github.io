"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer_1 = require("nodemailer");
const cors_1 = require("cors");
const multer_1 = require("multer");
const express_validator_1 = require("express-validator");
const app = express_1();
let helmet = require("helmet");
const port = 3033;
const transporter = nodemailer_1.createTransport({
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


app.use((0, multer_1)({ dest: 'uploads' }).single('file'));
app.use(express_1.json());
app.use((0, cors_1)());

app.use(helmet.hidePoweredBy());
const validateForm = [
    (0, express_validator_1.body)('formData.name').isLength({ min: 0, max: 255 }).withMessage('Name is required and must be less than 255 characters'),
    (0, express_validator_1.body)('formData.email').isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.body)('formData.message').isLength({ min: 0, max: 2000 }).withMessage('Message is required and must be less than 2000 characters'),
    (0, express_validator_1.body)('formData.company').isLength({ max: 255 }).withMessage('Company must be less than 255 characters'),
    (0, express_validator_1.body)('formData.select').isLength({ max: 255 }).withMessage('Select must be less than 255 characters'),
];
app.post('/send-form', validateForm, (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
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
        }
        else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
