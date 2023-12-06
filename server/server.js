import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import multer from 'multer';
import { body, validationResult } from 'express-validator';
const app = express();
app.use(multer({dest:"uploads"}).single("file"));
const port = 3033;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'misliazsite@gmail.com',
    pass: 'fgmrqgkrmpvgwtag'
  }
});

app.use(express.json());
app.use(cors());
const upload = multer({ dest: 'uploads' });

const validateForm = [
  body('formData.name').isLength({ min: 1, max: 255 }).withMessage('Name is required and must be less than 255 characters'),
  body('formData.email').isEmail().withMessage('Valid email is required'),
  body('formData.message').isLength({ min: 1, max: 100 }).withMessage('Message is required and must be less than 5000 characters'),
  body('formData.company').isLength({ max: 255 }).withMessage('Company must be less than 255 characters'),
  body('formData.select').isLength({ max: 255 }).withMessage('Select must be less than 255 characters'),
];
//const upload = multer(); // Использование multer для обработки файлов

app.post('/send-form',  validateForm,(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, message, company, select } = req.body.formData;

  const mailOptions = {
    from: 'misliazsite@gmail.com',
    to: "n.arthofer@sparkling.co.com",
    subject: select + "From: " + email,
    text:"Name: "+name+ "\nEmail: "+ email+"\nCompany:  "+company+"\nText:  "+message,
    attachments: [
  
    ],
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
