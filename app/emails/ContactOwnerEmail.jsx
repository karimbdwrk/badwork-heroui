import {
	Html,
	Head,
	Body,
	Container,
	Section,
	Text,
	Heading,
	Hr,
} from "@react-email/components";

export default function ContactOwnerEmail({ name, email, subject, message }) {
	return (
		<Html>
			<Head />
			<Body style={styles.body}>
				<Container style={styles.container}>
					{/* Header */}
					<Section style={styles.header}>
						<Heading style={styles.mainHeading}>
							🔔 Nouveau message de contact
						</Heading>
						<Text style={styles.timestamp}>
							Reçu le {new Date().toLocaleDateString("fr-FR", {
								day: "numeric",
								month: "long",
								year: "numeric",
								hour: "2-digit",
								minute: "2-digit",
							})}
						</Text>
					</Section>

					<Hr style={styles.hr} />

					{/* Client Info */}
					<Section style={styles.section}>
						<Heading style={styles.sectionHeading}>
							Informations du contact
						</Heading>
						
						<table style={styles.table}>
							<tr>
								<td style={styles.labelCell}>
									<strong>Nom :</strong>
								</td>
								<td style={styles.valueCell}>{name}</td>
							</tr>
							<tr>
								<td style={styles.labelCell}>
									<strong>Email :</strong>
								</td>
								<td style={styles.valueCell}>
									<a
										href={`mailto:${email}`}
										style={styles.link}>
										{email}
									</a>
								</td>
							</tr>
							<tr>
								<td style={styles.labelCell}>
									<strong>Sujet :</strong>
								</td>
								<td style={styles.valueCell}>{subject}</td>
							</tr>
						</table>
					</Section>

					<Hr style={styles.hr} />

					{/* Message */}
					<Section style={styles.section}>
						<Heading style={styles.sectionHeading}>Message</Heading>
						<div style={styles.messageBox}>
							<Text style={styles.messageText}>{message}</Text>
						</div>
					</Section>

					<Hr style={styles.hr} />

					{/* Quick Actions */}
					<Section style={styles.section}>
						<Text style={styles.actionText}>
							💡 <strong>Action rapide :</strong> Répondre à{" "}
							<a href={`mailto:${email}`} style={styles.link}>
								{email}
							</a>
						</Text>
					</Section>

					{/* Footer */}
					<Section style={styles.footer}>
						<Text style={styles.footerText}>
							Cet email a été généré automatiquement par le
							formulaire de contact de badwork.fr
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

const styles = {
	body: {
		backgroundColor: "#f4f4f4",
		fontFamily:
			"'Roboto Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
		padding: "20px",
	},
	container: {
		maxWidth: "600px",
		margin: "0 auto",
		backgroundColor: "#ffffff",
		borderRadius: "8px",
		overflow: "hidden",
		boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
	},
	header: {
		backgroundColor: "#303030",
		padding: "30px 40px",
		textAlign: "center",
	},
	mainHeading: {
		color: "#ffffff",
		fontSize: "24px",
		fontWeight: "700",
		margin: "0 0 10px 0",
	},
	timestamp: {
		color: "#cccccc",
		fontSize: "12px",
		margin: "0",
	},
	section: {
		padding: "30px 40px",
	},
	sectionHeading: {
		color: "#303030",
		fontSize: "18px",
		fontWeight: "600",
		margin: "0 0 20px 0",
		borderLeft: "4px solid #303030",
		paddingLeft: "12px",
	},
	table: {
		width: "100%",
		borderCollapse: "collapse",
	},
	labelCell: {
		color: "#666666",
		fontSize: "14px",
		padding: "8px 12px 8px 0",
		width: "100px",
		verticalAlign: "top",
	},
	valueCell: {
		color: "#303030",
		fontSize: "14px",
		padding: "8px 0",
		verticalAlign: "top",
	},
	link: {
		color: "#303030",
		textDecoration: "underline",
	},
	messageBox: {
		backgroundColor: "#f9f9f9",
		border: "1px solid #e0e0e0",
		borderRadius: "6px",
		padding: "20px",
	},
	messageText: {
		color: "#303030",
		fontSize: "14px",
		lineHeight: "1.6",
		margin: "0",
		whiteSpace: "pre-wrap",
	},
	actionText: {
		color: "#666666",
		fontSize: "14px",
		lineHeight: "1.6",
		margin: "0",
	},
	hr: {
		borderColor: "#e0e0e0",
		margin: "0",
	},
	footer: {
		backgroundColor: "#f9f9f9",
		padding: "20px 40px",
		textAlign: "center",
	},
	footerText: {
		color: "#999999",
		fontSize: "12px",
		margin: "0",
		lineHeight: "1.5",
	},
};
