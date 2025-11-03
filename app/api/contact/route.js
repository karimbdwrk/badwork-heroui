import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
	try {
		const body = await req.json();
		const { name, email, subject, description } = body;

		if (!name || !email || !subject || !description) {
			return NextResponse.json(
				{ error: "Missing fields" },
				{ status: 400 }
			);
		}

		// 1️⃣ Enregistrement dans Supabase
		// const { error: supabaseError } = await supabase
		// 	.from("contact_messages")
		// 	.insert([{ name, email, subject, description }]);

		// if (supabaseError) throw supabaseError;

		// 2️⃣ Envoi de l’email avec Resend
		await resend.emails.send({
			from: "no-reply@badwork.fr",
			to: "karim@badwork.fr",
			subject: `📩 New message from ${name}`,
			html: `
                <h2>New contact message</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Subject:</b> ${subject}</p>
                <p><b>Message:</b><br/>${description}</p>
            `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("❌ Error:", error);
		return NextResponse.json(
			{ error: "Failed to process message" },
			{ status: 500 }
		);
	}
}
