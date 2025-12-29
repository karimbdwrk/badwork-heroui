import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactConfirmationEmail from '../../emails/ContactConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { to, subject, name, message, email } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'BADWORK <contact@badwork.io>',
      to,
      subject: 'Confirmation de réception — BADWORK',
      react: ContactConfirmationEmail({
        name,
        email,
        subject,
        message,
      }),
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
