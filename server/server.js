"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = (require("express"));
const nodemailer_1 = (require("nodemailer"));
const cors_1 = (require("cors"));
const multer_1 = (require("multer"));
const express_validator_1 = require("express-validator");
const app = (0, express_1.default)();
const port = 3033;
const transporter = nodemailer_1.default.createTransport({
    service: 'Gmail',
    auth: {
        user: 'careers.sparkling.co@gmail.com',
        pass: 'tuuj ioas vyjh vywx',
    },
});
app.use((0, multer_1.default)({ dest: 'uploads' }).single('file'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const upload = (0, multer_1.default)({ dest: 'uploads' });
const validateForm = [
    (0, express_validator_1.body)('formData.name').isLength({ min: 3, max: 255 }).withMessage('Name is required and must be less than 255 characters'),
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
