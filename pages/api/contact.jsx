import multer from 'multer';
import { mailOptions, transporter } from "../../config/nodemailer";
import { NextApiRequest, NextApiResponse } from 'next';

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  try {
    await new Promise((resolve, reject) => {
      upload.single('file')(req, res, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(null);
      });
    });
    
    console.log(req.body); 

    if (!req.body || !req.body.name || !req.body.email || !req.file) {
      throw new Error('Missing required fields in request body');
    }

    const { name, email, message } = req.body;

    await transporter.sendMail({
      ...mailOptions,


      subject: req.body.email,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path
        }
      ]
    });

    res.status(200).send('Email sent successfully');
  } catch (error) {

    res.status(500).send('Internal Server Error');
  }
}
