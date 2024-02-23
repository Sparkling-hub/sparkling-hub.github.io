import multer from "multer";
import { mailOptions, transporter } from "../../config/nodemailer";
import fs from "fs";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  select: "Select",
  company: "Company",
  phone: "Phone",
  linkedin: "Linkdin",
  message: "Message",

};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    if (CONTACT_MESSAGE_FIELDS[key] && val) {
      return `${str}${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`;
    }
    return str;
  }, "");

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    if (val ) {
      return `${str}<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`;
    }
    return str;
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
      
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
    fileFilter: function (req, file, cb) {
      // Проверка формата файла
      if (file.mimetype !== "application/pdf") {
        return cb(new Error("Incorrect file format"));
      }

      // Проверка размера файла (необязательно)
      if (file.size > 5 * 1024 * 1024) {
        return cb(new Error("The file size exceeds the maximum limit (5MB)."));
      }

      // Принять файл, если он соответствует условиям
      else cb(null, true);
    },
 
  }),
  limits:{
    fileSize: 5 * 1024 * 1024,}
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    await new Promise((resolve, reject) => {
      upload.single("file")(req, res, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(null);
      });
    });

    console.log(req.body);

    if (!req.body || !req.body.name || !req.body.email) {
      throw new Error("Missing required fields in request body");
    }
    if (req.body.file) {
      const clamscanConfig = {
        remove_infected: true,
        quarantine_infected: "./quarantine",
      };
      const NodeClam = require("clamscan");
      const ClamScan = new NodeClam().init(clamscanConfig);

      ClamScan.then(async (clamscan) => {
        try {
          const { isInfected1, file, viruses } = await clamscan.isInfected(
            req.file
          );
          if (isInfected1) console.log(`${file} is infected with ${viruses}!`);
          else console.log("File is harmless");
        } catch (err) {
          console.log("Error:", err.message);
        }
      }).catch((err) => {
        console.log("Initialization Error:", err.message);
      });
    }
    let attachments = [];

    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        path: req.file.path,
      });
    }
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(req.body),
      subject: req.body.email,
      attachments: attachments,
    });

    res.status(200).send("Email sent successfully");
    return { success: true };
  } catch (error) {
    res.status(500).send(error.message);
  
  }finally {
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted successfully");
    }
  });}
}
