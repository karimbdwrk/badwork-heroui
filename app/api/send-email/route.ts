import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactConfirmationEmail from '../../emails/ContactConfirmationEmail';
import ContactOwnerEmail from '../../emails/ContactOwnerEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { to, subject, name, message, email, isOwner } = await req.json();

    // Choisir le template en fonction du destinataire
    const emailTemplate = isOwner 
      ? ContactOwnerEmail({ name, email, subject, message })
      : ContactConfirmationEmail({ name, email, subject, message });

    const emailSubject = isOwner
      ? `Nouveau message de ${name} — ${subject}`
      : 'Confirmation de réception — BADWORK';

    const { data, error } = await resend.emails.send({
      from: 'BADWORK <contact@badwork.io>',
      to,
      subject: emailSubject,
      react: emailTemplate,
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}
