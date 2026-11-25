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
// texte, sinon elles disparaîtraient sur le fond sombre.
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
	{ node: <SiPocketbase />, title: "PocketBase", color: "#B8DBE4" },
	{ node: <LivekitIcon />, title: "LiveKit", color: INK },
	{ node: <SiStrapi />, title: "Strapi", color: "#4945FF" },
	{ node: <SiShopify />, title: "Shopify", color: "#95BF47" },
	{ node: <SiStripe />, title: "Stripe", color: "#635BFF" },
	{ node: <MollieIcon />, title: "Mollie", color: INK },
	{ node: <ResendIcon />, title: "Resend", color: INK },
	{ node: <SiMailchimp />, title: "Mailchimp", color: "#FFE01B" },
	{ node: <SiDocker />, title: "Docker", color: "#2496ED" },
	{ node: <SiKubernetes />, title: "Kubernetes", color: "#326CE5" },
	{ node: <SiGithub />, title: "GitHub", color: INK },
	{ node: <SiVercel />, title: "Vercel", color: INK },
	{ node: <SiThreedotjs />, title: "Three.js", color: INK },
	{ node: <SiWebgl />, title: "WebGL", color: "#990000" },
	// Logo de Framer, la société qui a créé Framer Motion
	{ node: <SiFramer />, title: "Framer Motion", color: "#0055FF" },
	{ node: <MotionIcon />, title: "Motion", color: "#FFE023" },
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
			aria-labelledby='stack-title'
			className='relative w-full pt-28 pb-8 sm:pt-36'>
			<header className='mx-auto mb-20 sm:mb-32 grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-12 lg:items-end'>
				<div className='lg:col-span-7'>
					<p className='font-mono text-xs text-bw-muted'>(01) — Stack</p>
					<h2
						id='stack-title'
						className='mt-4 text-4xl sm:text-6xl font-semibold tracking-tighter leading-[0.95]'>
						Nos outils de travail.
					</h2>
				</div>
				<p className='lg:col-span-4 lg:col-start-9 max-w-[40ch] text-sm sm:text-base leading-relaxed text-bw-muted'>
					Les technologies avec lesquelles nous concevons et développons
					sites web, applications mobiles et logiciels.
				</p>
			</header>

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
