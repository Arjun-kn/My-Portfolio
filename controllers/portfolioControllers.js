const { createTransport } = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transporter = createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    type: "PLAIN",
    user: "arjunchauhan0009@gmail.com",
    pass: process.env.API_BREVO,
  },
});

const sendEmailControllers = (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(500).send({
        success: false,
        message: "Please provide All Fields",
      });
    }

    let info = transporter.sendMail({
      from: "arjunchauhan0009@gmail.com",
      to: "arjunchauhan0009@gmail.com",
      subject: "Regarding Mern Portfolio App",
      text: `
  <h5>Detail Information </h5>
  <ul>
  <li>
  <p>Name : ${name}</p>
  </li>
  <li>
  <p>Email : ${email}</p>
  </li>
  <li>
  <p>Message : ${message}</p>
  </li>
  
  </ul>
  `,
    });

    console.log(info);

    return res.status(200).json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

module.exports = { sendEmailControllers };
