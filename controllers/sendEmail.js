const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "liana29@ethereal.email",
      pass: "Mb8kRB1peCxSRKRmSV",
    },
  });

  let info = await transporter.sendMail({
    from: "sodja33@gmail.com <sodja33@gmail.com>",
    to: "sodja43@gmail.com",
    subject: "Test Email from Node",
    text: "Nathan makes six figures",
    html: "<h1>Nathan makes six figures</h1>",
  });
  console.log("message: " + info);
  res.send({ message: info });
};

module.exports = sendEmail;
