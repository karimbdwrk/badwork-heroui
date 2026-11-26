"use client";

import {
	SiNextdotjs,
	SiReact,
	SiExpo,
	SiTypescript,
	SiTailwindcss,
	SiShadcnui,
	SiNodedotjs,
	SiExpress,
	SiSupabase,
	SiPocketbase,
	SiStrapi,
	SiShopify,
	SiDocker,
	SiKubernetes,
	SiThreedotjs,
	SiWebgl,
	SiElectron,
	SiFigma,
	SiVercel,
	SiStripe,
	SiGithub,
	SiAdobecreativecloud,
	SiFramer,
	SiMailchimp,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import {
	GluestackIcon,
	MollieIcon,
	MotionIcon,
	LivekitIcon,
	UniwindIcon,
	ResendIcon,
} from "@/components/StackIcons";

// Au repos : logos gris (currentColor). Au survol : couleur officielle de la
// marque. Les marques noires (Next.js, Vercel, GitHub…) prennent la couleur du
// texte, sinon elles disparaîtraient sur le fond sombre. Idem pour les couleurs
// peu lisibles sur l’un des thèmes (PocketBase, Mailchimp, WebGL, Motion).
const INK = "var(--bw-fg)";

const stack = [
	{ node: <SiNextdotjs />, title: "Next.js", color: INK },
	{ node: <SiReact />, title: "React / React Native", color: "#61DAFB" },
	{ node: <SiExpo />, title: "Expo", color: INK },
	{ node: <SiTypescript />, title: "TypeScript", color: "#3178C6" },
	{ node: <SiTailwindcss />, title: "Tailwind CSS", color: "#06B6D4" },
	{ node: <SiShadcnui />, title: "shadcn/ui", color: INK },
	{ node: <GluestackIcon />, title: "gluestack-ui", color: INK },
	{ node: <UniwindIcon />, title: "Uniwind", color: INK },
	{ node: <SiNodedotjs />, title: "Node.js", color: "#5FA04E" },
	{ node: <SiExpress />, title: "Express", color: INK },
	{ node: <SiSupabase />, title: "Supabase", color: "#3FCF8E" },
	{ node: <SiPocketbase />, title: "PocketBase", color: INK },
	{ node: <LivekitIcon />, title: "LiveKit", color: INK },
	{ node: <SiStrapi />, title: "Strapi", color: "#4945FF" },
	{ node: <SiShopify />, title: "Shopify", color: "#95BF47" },
	{ node: <SiStripe />, title: "Stripe", color: "#635BFF" },
	{ node: <MollieIcon />, title: "Mollie", color: INK },
	{ node: <ResendIcon />, title: "Resend", color: INK },
	{ node: <SiMailchimp />, title: "Mailchimp", color: INK },
	{ node: <SiDocker />, title: "Docker", color: "#2496ED" },
	{ node: <SiKubernetes />, title: "Kubernetes", color: "#326CE5" },
	{ node: <SiGithub />, title: "GitHub", color: INK },
	{ node: <SiVercel />, title: "Vercel", color: INK },
	{ node: <SiThreedotjs />, title: "Three.js", color: INK },
	{ node: <SiWebgl />, title: "WebGL", color: INK },
	// Logo de Framer, la société qui a créé Framer Motion
	{ node: <SiFramer />, title: "Framer Motion", color: "#0055FF" },
	{ node: <MotionIcon />, title: "Motion", color: INK },
	{ node: <SiElectron />, title: "Electron", color: "#47848F" },
	{ node: <SiFigma />, title: "Figma", color: "#F24E1E" },
	{
		node: <SiAdobecreativecloud />,
		title: "Adobe Creative Cloud",
		color: "#DA1F26",
	},
].map(({ color, ...item }) => ({
	...item,
	ariaLabel: item.title,
	hoverColor: color,
}));

export default function StackSection() {
	return (
		<section
			id='stack'
			aria-label='Technologies utilisées'
			className='relative w-full py-20 sm:py-28'>
			<LogoLoop
				logos={stack}
				speed={45}
				logoHeight={32}
				gap={72}
				fadeOut
				fadeOutWidth={0.1}
				labels='hover'
				scaleOnHover
				ariaLabel='Technologies utilisées'
				className='stack-loop text-bw-muted'
			/>
		</section>
	);
}
