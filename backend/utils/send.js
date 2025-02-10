import nodemailer from "nodemailer";
export async function send({ subject, to, text, html }) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "elsie.lueilwitz59@ethereal.email",
      pass: "tVyNbAbvRSraEecUas",
    },
  });
  await transporter.sendMail({
    from: "elsie.lueilwitz59@ethereal.email",
    to: to,
    subject: subject,
    text: text,
    html: html,
  });
}
