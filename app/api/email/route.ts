// In the old website we were using the gmail client
// now that we are using Imap from TransIp, you can use this:

// Configure SMTP transporter for IMAP/SMTP
// const transporter = nodemailer.createTransport({
    // host: process.env.IMAP_HOST, // "smtp.transip.email"
    // port: Number(process.env.IMAP_PORT), // always use 465 since it's more secure
    // secure: process.env.IMAP_PORT === '465', // true for 465, false for other ports (587)
    // auth: {
      // user: process.env.IMAP_USER, // Your IMAP/SMTP email
      // pass: process.env.IMAP_PASSWORD, // Your IMAP/SMTP password
    // },
  // });


import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
      const data = await request.json();
      console.log('Received email data:', data);

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          type: 'OAuth2',
          user: process.env.SMTP_USER,
          clientId: process.env.OAUTH_CLIENT_ID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
  });

    // Construct the email content
    const formEmailContent = `
    Name: ${data.fullName}
    Email: ${data.emailAddress}
    Company: ${data.organization}
    Comments: ${data.questionsComments}
    `;
    
            // Send the email
            const info = await transporter.sendMail({
                from: `"OPPR AI" <${process.env.SMTP_USER}>`,
                to: process.env.SMTP_USER,
                subject: "New message from contact form",
                text: formEmailContent,
            });
    
            // Construct the confirmation email content
            const clientEmailContent = `
              <p>Dear ${data.fullName},</p>
              <p>Thank you for expressing your interest in our services. We have received your details and a member of our team will be in touch with you within 24 hours.</p>
              <p>If you have any immediate questions, please do not hesitate to reach out to us directly.</p>
              <p>Warm regards,</p>
              <p>The Oppr AI Team</p>
            `;

            // Send the confirmation email to the client
            const confirmation = await transporter.sendMail({
              from: `"Oppr AI" <${process.env.SMTP_USER}>`,
              to: data.emailAddress,
              subject: "Your Request with Oppr AI",
              html: clientEmailContent,
            });

    console.log("Confirmation email sent: %s", confirmation.messageId);

    // De volgende regel kan worden aangepast aan je specifieke behoeften
    return NextResponse.json({ success: true, message: 'E-mail succesvol verzonden' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' });
  }
}
