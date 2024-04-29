import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import nodemailer from "nodemailer";

interface MailI {
  email: string;
  emailType: string;
  userId: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

export const sendEmail = async ({ email, emailType, userId }: MailI) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    }

    // TODO: configure mail usage
    const mailOptions = {
      from: "sumitjha365@gmail.com", // sender address
      to: email,
      subject:
        emailType == "VERIFY" ? "Verify your email" : "Reset your password",
      //   text: "Hello world?",
      html: "<b>Hello world?</b>", // html body
    };

    const mailRes = await transporter.sendMail(mailOptions);
    return mailRes;
  } catch (error) {}
};
