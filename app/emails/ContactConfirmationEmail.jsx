import { Section, Text } from "@react-email/components";
import EmailLayout, { s } from "./EmailLayout";

// Envoyé au visiteur après le formulaire de contact
export default function ContactConfirmationEmail({ name, subject, message }) {
	return (
		<EmailLayout preview='Nous avons bien reçu votre message, nous revenons vers vous au plus vite.'>
			<Text style={s.label}>(01) — Message reçu</Text>
			<Text style={s.heading}>Merci, {name}.</Text>
			<Text style={s.text}>
				Nous avons bien reçu votre message et revenons vers vous au
				plus vite.
			</Text>

			<Section style={s.divider}>
				<Text style={s.label}>Objet</Text>
				<Text style={s.value}>{subject}</Text>

				<Text style={{ ...s.label, marginTop: "24px" }}>
					Votre message
				</Text>
				<Section style={s.messageBox}>
					<Text style={s.message}>{message}</Text>
				</Section>
			</Section>

			<Text style={{ ...s.text, marginTop: "32px" }}>
				À très vite,
				<br />
				<span style={s.strong}>badwork | digital</span>
			</Text>
		</EmailLayout>
	);
}
