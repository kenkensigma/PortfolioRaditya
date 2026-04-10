import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ success: false, message: 'All fields are required.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USERNAME}>`,
      to:   process.env.MAIL_TO || process.env.MAIL_USERNAME,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;background:#f5f5f5;padding:32px">
          <div style="max-width:520px;margin:0 auto;background:#fff;padding:32px;border:1px solid #e5e5e5">
            <h2 style="margin:0 0 20px;font-size:18px;color:#111">New Portfolio Message</h2>
            <p style="margin:0 0 8px;color:#555"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 20px;color:#555"><strong>Email:</strong> <a href="mailto:${email}" style="color:#0070f3">${email}</a></p>
            <hr style="border:none;border-top:1px solid #eee;margin:0 0 20px">
            <p style="white-space:pre-wrap;line-height:1.7;color:#333">${message}</p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true, message: "Thank you! I'll be in touch shortly." })

  } catch (err) {
    console.error('Mail error:', err)
    return Response.json({ success: false, message: 'Failed to send. Please try again.' }, { status: 500 })
  }
}
