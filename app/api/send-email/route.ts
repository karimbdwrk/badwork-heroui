import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    console.log("API route /send-email called");
    console.log("resend :", resend);
    try {
        const { to, subject, html } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'BADWORK <contact@badwork.io>', // ou ton domaine vérifié
            to,
            subject,
            html,
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
