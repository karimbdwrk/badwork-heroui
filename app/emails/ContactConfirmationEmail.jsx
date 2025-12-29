import {
	Html,
	Head,
	Body,
	Container,
	Section,
	Text,
	Heading,
	Img,
	Hr,
} from "@react-email/components";

export default function ContactConfirmationEmail({
	name,
	email,
	subject,
	message,
}) {
	return (
		<Html>
			<Head />
			<Body style={styles.body}>
				<Container style={styles.container}>
					{/* Logo */}
					<Section style={styles.logoSection}>
						<Img
							src='https://badwork-bucket.s3.eu-west-3.amazonaws.com/newbad-stretch.svg'
							alt='logo badwork'
							width='120'
							style={styles.logo}
						/>
					</Section>

					{/* Content */}
					<Section style={styles.content}>
						<Heading style={styles.heading}>
							Message bien reçu ✨
						</Heading>

						<Text style={styles.text}>
							Salut <strong>{name}</strong> ({email}),
						</Text>

						<Text style={styles.text}>
							Merci pour ton message. Nous l’avons bien reçu et
							nous reviendrons vers toi très rapidement.
						</Text>

						<Hr style={styles.hr} />

						<Text style={styles.label}>Récapitulatif :</Text>

						<Text style={styles.meta}>
							<strong>Sujet :</strong> {subject}
						</Text>

						<Text style={styles.messageBox}>{message}</Text>

						<Text style={styles.text}>
							À très vite,
							<br />
							<strong>Badwork | Digital</strong>
						</Text>
					</Section>

					{/* Footer */}
					<Section style={styles.footer}>
						<Text style={styles.footerText}>
							Creative development · Web · Apps · Software
						</Text>
						<Text style={styles.footerTextMuted}>
							© {new Date().getFullYear()} Badwork. Tous droits
							réservés.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

const styles = {
	body: {
		backgroundColor: "#0a0a0a",
		fontFamily:
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
	},
	container: {
		maxWidth: "600px",
		margin: "40px auto",
		backgroundColor: "#111",
		borderRadius: "12px",
		overflow: "hidden",
		border: "1px solid #1f1f1f",
	},
	logoSection: {
		padding: "32px",
		textAlign: "center",
		background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
	},
	logo: {
		margin: "0 auto",
	},
	content: {
		padding: "32px",
		color: "#e5e5e5",
	},
	heading: {
		fontSize: "26px",
		marginBottom: "16px",
		color: "#ffffff",
	},
	text: {
		fontSize: "15px",
		lineHeight: "1.6",
		marginBottom: "14px",
	},
	label: {
		fontSize: "13px",
		textTransform: "uppercase",
		letterSpacing: "1px",
		color: "#9ca3af",
		marginBottom: "8px",
	},
	meta: {
		fontSize: "14px",
		marginBottom: "12px",
	},
	messageBox: {
		backgroundColor: "#0f172a",
		padding: "16px",
		borderRadius: "8px",
		fontSize: "14px",
		lineHeight: "1.6",
		whiteSpace: "pre-wrap",
		border: "1px solid #1e293b",
	},
	hr: {
		borderColor: "#1f2937",
		margin: "24px 0",
	},
	footer: {
		padding: "20px",
		backgroundColor: "#0b0b0b",
		textAlign: "center",
	},
	footerText: {
		fontSize: "13px",
		color: "#d1d5db",
	},
	footerTextMuted: {
		fontSize: "12px",
		color: "#6b7280",
		marginTop: "4px",
	},
};
