import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Section,
	Img,
	Text,
	Link,
	Font,
} from "@react-email/components";

// Couleurs du thème sombre du site (styles/globals.css)
export const c = {
	bg: "#0b0b0b",
	fg: "#ecebe7",
	muted: "#8a8984",
	line: "#262625",
	surface: "#151515",
};

const sans = "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const mono = "'Geist Mono', 'SFMono-Regular', Menlo, Consolas, monospace";

// PNG et pas SVG : Gmail n'affiche pas les SVG. Fond sombre intégré à l'image
// pour qu'elle reste lisible si le client mail inverse les couleurs.
const LOGO_URL = "https://www.badwork.fr/email/badwork-logo.png";

export const s = {
	label: {
		fontFamily: mono,
		fontSize: "12px",
		lineHeight: "18px",
		color: c.muted,
		margin: "0",
	},
	heading: {
		fontFamily: sans,
		fontSize: "34px",
		lineHeight: "36px",
		fontWeight: 600,
		letterSpacing: "-1.2px",
		color: c.fg,
		margin: "14px 0 0",
	},
	text: {
		fontFamily: sans,
		fontSize: "15px",
		lineHeight: "24px",
		color: c.muted,
		margin: "16px 0 0",
	},
	strong: {
		color: c.fg,
		fontWeight: 500,
	},
	value: {
		fontFamily: sans,
		fontSize: "15px",
		lineHeight: "22px",
		color: c.fg,
		margin: "4px 0 0",
	},
	messageBox: {
		backgroundColor: c.surface,
		borderRadius: "8px",
		padding: "20px",
		marginTop: "8px",
	},
	message: {
		fontFamily: sans,
		fontSize: "15px",
		lineHeight: "24px",
		color: c.fg,
		margin: "0",
		whiteSpace: "pre-wrap",
	},
	button: {
		display: "inline-block",
		backgroundColor: c.fg,
		color: c.bg,
		fontFamily: sans,
		fontSize: "15px",
		fontWeight: 500,
		letterSpacing: "-0.2px",
		textDecoration: "none",
		borderRadius: "6px",
		padding: "14px 28px",
	},
	divider: {
		borderTop: `1px solid ${c.line}`,
		margin: "32px 0 0",
		paddingTop: "32px",
	},
	link: {
		color: c.fg,
		textDecoration: "underline",
		fontFamily: "inherit",
	},
};

export default function EmailLayout({ preview, children }) {
	return (
		<Html lang='fr'>
			<Head>
				{/* Indique que l'email est déjà sombre : limite l'inversion des couleurs */}
				<meta name='color-scheme' content='dark' />
				<meta name='supported-color-schemes' content='dark' />
				<Font
					fontFamily='Geist'
					fallbackFontFamily={["Helvetica", "Arial", "sans-serif"]}
					webFont={{
						// Gmail ignore les polices web (repli Helvetica) ; Apple Mail les charge
						url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOMImpna6VEdtZiI.woff2",
						format: "woff2",
					}}
					fontWeight={400}
					fontStyle='normal'
				/>
			</Head>
			<Preview>{preview}</Preview>
			<Body
				style={{
					backgroundColor: c.bg,
					margin: "0",
					padding: "0",
					color: c.fg,
					fontFamily: sans,
				}}>
				<Container
					style={{
						maxWidth: "560px",
						margin: "0 auto",
						padding: "48px 24px 56px",
						backgroundColor: c.bg,
					}}>
					<Section>
						<Link href='https://www.badwork.fr'>
							<Img
								src={LOGO_URL}
								width='176'
								height='15'
								alt='BADWORK'
								style={{ display: "block", border: "0" }}
							/>
						</Link>
					</Section>

					<Section style={{ paddingTop: "56px" }}>{children}</Section>

					<Section style={s.divider}>
						<Text style={s.label}>
							Sites web · Applications mobiles · Logiciels
						</Text>
						<Text style={{ ...s.label, marginTop: "6px" }}>
							<Link href='https://www.badwork.fr' style={s.link}>
								www.badwork.fr
							</Link>
							{"  ·  "}
							<Link href='mailto:contact@badwork.fr' style={s.link}>
								contact@badwork.fr
							</Link>
						</Text>
						<Text style={{ ...s.label, marginTop: "6px" }}>
							© {new Date().getFullYear()} badwork | digital
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}
