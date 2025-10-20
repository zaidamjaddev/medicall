import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

   const mailOptions = {
  from: `"MediCall AI Contact" <${process.env.EMAIL_USER}>`,
  to: body.email, 
  subject: `New Contact Form Submission from ${body.name}`,
  text: `
    Name: ${body.name}
    Email: ${body.email}
    Phone: ${body.phone || "N/A"}
    Company: ${body.company || "N/A"}

    Message:
    ${body.message}
  `,
  html: `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; padding: 30px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <div style="background: #06B6D4; padding: 16px 24px; color: white; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">📞 MediCall AI — New Contact Form Submission</h2>
        </div>
        <div style="padding: 24px;">
          <p style="font-size: 16px; color: #334155; margin-bottom: 16px;">You received a new message from your website contact form.</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #0f172a;">Name:</td>
              <td style="padding: 8px; color: #475569;">${body.name}</td>
            </tr>
            <tr style="background: #f1f5f9;">
              <td style="padding: 8px; font-weight: bold; color: #0f172a;">Email:</td>
              <td style="padding: 8px; color: #475569;">${body.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #0f172a;">Phone:</td>
              <td style="padding: 8px; color: #475569;">${body.phone || "N/A"}</td>
            </tr>
            <tr style="background: #f1f5f9;">
              <td style="padding: 8px; font-weight: bold; color: #0f172a;">Company:</td>
              <td style="padding: 8px; color: #475569;">${body.company || "N/A"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #0f172a; margin-bottom: 8px;">Message:</p>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #334155; line-height: 1.6;">
              ${body.message}
            </div>
          </div>
        </div>
        <div style="background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
          <p style="margin: 0;">© ${new Date().getFullYear()} MediCall AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  `,
}

    
    await transporter.sendMail(mailOptions)

    console.log(`[Contact Form] Message sent from ${body.email}`)

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We’ll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
