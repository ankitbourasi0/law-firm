import { NextResponse,NextRequest} from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export  default async function POST(request,res) {
  const { email, message } =  request.body
    console.log(email, message)
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Message from (${email})`,
    text: message,
  }

  try {
    await transport.sendMail(mailOptions)
    return res.status(200).send("success")
} catch (error) {
     console.log(error)
  return res.status(500).send(error);
  }
}