import { Section, Text, Button, Link } from "@react-email/components";
import EmailLayout, { s } from "./EmailLayout";

// Envoyé au propriétaire du site pour chaque demande du formulaire
export default function ContactOwnerEmail({ name, email, subject, message }) {
	// Vercel tourne en UTC : on force l'heure de Paris
	const receivedAt = new Date().toLocaleString("fr-FR", {
		timeZone: "Europe/Paris",
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<EmailLayout preview={`${subject} — ${message.slice(0, 90)}`}>
			<Text style={s.label}>(01) — Nouveau message · {receivedAt}</Text>
			<Text style={s.heading}>{name}</Text>
			<Text style={{ ...s.text, marginTop: "8px" }}>{subject}</Text>

			<Section style={s.divider}>
				<Text style={s.label}>Email</Text>
				<Text style={s.value}>
					<Link href={`mailto:${email}`} style={s.link}>
						{email}
					</Link>
				</Text>

				<Text style={{ ...s.label, marginTop: "24px" }}>Message</Text>
				<Section style={s.messageBox}>
					<Text style={s.message}>{message}</Text>
				</Section>
			</Section>

			<Section style={{ marginTop: "32px" }}>
				<Button
					href={`mailto:${email}?subject=${encodeURIComponent(`Re: ${subject}`)}`}
					style={s.button}>
					Répondre à {name}
				</Button>
			</Section>
		</EmailLayout>
	);
}
