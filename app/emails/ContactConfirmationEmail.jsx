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
						<svg
							viewBox='0 0 1181.85 99.34'
							width={120}
							xmlns='http://www.w3.org/2000/svg'
							role='img'
							aria-label='BADWORK logo'>
							<g fill='#FFFFFF'>
								<path d='M0,99.34V.08h85.19c21.4,0,45.63,4.93,45.63,23.08,0,10.24-6.21,17.45-25.48,20.2v.27c19.88,2.13,30.28,10.39,30.28,24.77,0,19.6-16.54,30.94-51.39,30.94H0ZM54.6,40.51h18.41c5.49,0,8.94-2.13,8.94-5.87,0-3.73-2.88-5.6-8.41-5.6H54.6ZM54.6,71.46h18.63c6.13,0,9.6-2.13,9.6-6.67,0-4.27-3.2-6.4-9.6-6.4H54.6Z' />
								<path d='M298.19,99.34h-60.17l-4-14.94h-31.75l-3.87,14.94h-60.04L176.38.08h82.59ZM216.94,28.63l-7.74,29.62h17.88Z' />
								<path d='M306.87,99.34V.08h77.52c43.63,0,66.05,18.68,66.05,49.76s-22.16,49.5-66.05,49.5ZM363.43,67.99h11.34c12.01,0,18.28-6.4,18.28-18.14,0-11.74-6.27-18.41-18.28-18.41h-11.34Z' />
								<path d='M544.49,99.34h-63.77L453.49.08h53.9l14.54,75.78h.27L535.28.08h44.56l14.54,75.78h.27L607.59.08h54.04l-27.22,99.27h-63.77l-13.21-59.24h-.27Z' />
								<path d='M836.83,99h-123c-27.34,0-49.5-22.16-49.5-49.5S686.49,0,713.83,0h123c27.34,0,49.5,22.16,49.5,49.5S864.17,99,836.83,99ZM828.33,49.5c0-8.41-6.82-15.23-15.23-15.23h-75.54c-8.41,0-15.23,6.82-15.23,15.23s6.82,15.23,15.23,15.23h75.54c8.41,0,15.23-6.82,15.23-15.23Z' />
								<path d='M896.4,99.34V.08h79.38c34.68,0,56.83,13.07,56.83,33.49,0,13.61-8.54,23.08-22.82,27.21v.13c10.67,3.47,14.94,10.14,17.61,24.02l.8,3.07c1.07,5.25,2.44,9.96,4.13,14.14h-55.5c-1.25-2.49-2.27-6.71-3.07-12.67l-.53-2.94c-.8-4.53-4.53-6.94-12.01-6.94h-8.81v23.62ZM949.97,48.24h13.74c7.47,0,11.21-3.2,11.21-8.41s-3.73-8.14-11.21-8.14h-13.74Z' />
								<path d='M1099.47,99.34h-56.57V.08h56.57v34.15h7.47L1120.15.08h60.44l-25.62,48.17v1.07l29.89,50.03h-61.64l-16.28-33.89h-7.47Z' />
							</g>
						</svg>
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
			"'Roboto Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
		background: "linear-gradient(135deg, #101010, #303030)",
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
		backgroundColor: "#0b0b0b",
		padding: "16px",
		borderRadius: "8px",
		fontSize: "14px",
		lineHeight: "1.6",
		whiteSpace: "pre-wrap",
		border: "1px solid #1f1f1f",
	},
	hr: {
		borderColor: "#1f1f1f",
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
