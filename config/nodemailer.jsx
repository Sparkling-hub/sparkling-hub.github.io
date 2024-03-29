import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const email_to = process.env.EMAIL_TO;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:email,
    pass:pass,
  },
  secure: true, 
});

export const mailOptions = {
  from: email,
  to: email_to,
};