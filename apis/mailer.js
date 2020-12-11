const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");

router.get("/", (req, res, next) => {
  res.send("index");
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const title = req.body.title;
  const message = req.body.message;
  // assign your email password.
  const password = "";

  const transporter = nodeMailer.createTransport({
    // outlook can send email to only itself.
    service: "outlook",
    auth: {
      user: email,
      pass: password,
    },
  });

  if (req.body == undefined || !("email" in req.body)) {
    res.send({
      status: 500,
      message: "missing parameter",
    });
  }

  const mailData = {
    from: email,
    to: email,
    subject: title,
    html: `
        <h1>${email}</h1>
        <div>${title}</div>
        <p>${message}</p>
      `,
  };
  let mailSender = "";
  try {
    mailSender = await transporter.sendMail(mailData);
  } catch (error) {
    res.send({
      status: 500,
      message: error.message,
    });
  }
  res.send({
    status: 200,
    messageId: mailSender.messageId,
  });
});

module.exports = router;
