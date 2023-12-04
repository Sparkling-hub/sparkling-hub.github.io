import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import multer from 'multer';
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


//const upload = multer(); // Использование multer для обработки файлов

app.post('/send-form',  (req, res) => {

  const { name, email, message, file } = req.body.formData;

  const mailOptions = {
    from: 'misliazsite@gmail.com',
    to: "nastyj2003@gmail.com",
    subject: name + email,
    text: message,
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
