const nodemailer = require("nodemailer");
export const createMailTransporter = () => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
  return transporter;
};

 