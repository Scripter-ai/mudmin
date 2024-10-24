import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
      const data = await request.json();
      console.log('Ontvangen e-mailgegevens:', data);

      const transporter = nodemailer.createTransport({
        host: process.env.IMAP_HOST || "smtp.transip.email", 
        port: Number(process.env.IMAP_PORT) || 465, 
        secure: process.env.IMAP_PORT === '465', 
        auth: {
          user: process.env.IMAP_USER, 
          pass: process.env.IMAP_PASSWORD,
        },
      });

      const formEmailContent = `
        Naam: ${data.fullName}
        E-mail: ${data.emailAddress}
        Bedrijf: ${data.organization}
        Opmerkingen: ${data.questionsComments}
      `;
      
      const info = await transporter.sendMail({
          from: `"Mudmin" <${process.env.IMAP_USER}>`, 
          to: process.env.IMAP_USER, 
          subject: "Nieuw bericht van contactformulier",
          text: formEmailContent,
      });
      
      console.log("E-mail verzonden: %s", info.messageId);
      
      const clientEmailContent = `
        <p>Beste ${data.fullName},</p>
        <p>Hartelijk dank voor je interesse in de diensten van Mudmin. We hebben je gegevens ontvangen en een lid van ons team zal binnen 24 uur contact met je opnemen.</p>
        <p>Mudmin is hier om je te ondersteunen op je weg naar herstel van verslaving. Als je direct vragen hebt, aarzel dan niet om direct contact met ons op te nemen.</p>
        <p>Met vriendelijke groet,</p>
        <p>Het Mudmin Team</p>
      `;

      const confirmation = await transporter.sendMail({
        from: `"Mudmin" <${process.env.IMAP_USER}>`,
        to: data.emailAddress, 
        subject: "Je aanvraag bij Mudmin",
        html: clientEmailContent,
      });

      console.log("Bevestigingse-mail verzonden: %s", confirmation.messageId);

      return NextResponse.json({ success: true, message: 'E-mail succesvol verzonden' });

    } catch (error) {
      console.error('Fout bij het verzenden van e-mail:', error);
      return NextResponse.json({ success: false, error: 'E-mail verzenden mislukt' });
    }
}
