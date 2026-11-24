"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// TODO: remplacer par les vrais projets (titre, description, image, lien)
const projects = [
	{
		title: "Project One",
		description: "A short line about what this project is and does.",
		image: "/projects/project-1.jpg",
		tags: ["Next.js", "Three.js"],
		year: "2025",
		href: "#",
	},
	{
		title: "Project Two",
		description: "A short line about what this project is and does.",
		image: "/projects/project-2.jpg",
		tags: ["React", "GSAP"],
		year: "2025",
		href: "#",
	},
	{
		title: "Project Three",
		description: "A short line about what this project is and does.",
		image: "/projects/project-3.jpg",
		tags: ["Node.js", "Supabase"],
		year: "2024",
		href: "#",
	},
	{
		title: "Project Four",
		description: "A short line about what this project is and does.",
		image: "/projects/project-4.jpg",
		tags: ["Branding"],
		year: "2024",
		href: "#",
	},
	{
		title: "Project Five",
		description: "A short line about what this project is and does.",
		image: "/projects/project-5.jpg",
		tags: ["UI Design", "Webflow"],
		year: "2024",
		href: "#",
	},
	{
		title: "Project Six",
		description: "A short line about what this project is and does.",
		image: "/projects/project-6.jpg",
		tags: ["Next.js"],
		year: "2023",
		href: "#",
	},
	{
		title: "Project Seven",
		description: "A short line about what this project is and does.",
		image: "/projects/project-7.jpg",
		tags: ["Three.js", "WebGL"],
		year: "2023",
		href: "#",
	},
];

// Composition pensée pour 7 projets : un projet phare pleine largeur,
// puis trois rangées qui alternent grand/petit et décalages verticaux
const layouts = [
	{
		cell: "lg:col-span-12",
		ratio: "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]",
		featured: true,
	},
	{ cell: "lg:col-span-7", ratio: "aspect-[4/3]" },
	{ cell: "lg:col-span-5 lg:mt-40", ratio: "aspect-[4/5]" },
	{ cell: "lg:col-span-5 lg:col-start-2", ratio: "aspect-[4/5]" },
	{ cell: "lg:col-span-5 lg:col-start-8 lg:mt-32", ratio: "aspect-square" },
	{ cell: "lg:col-span-4", ratio: "aspect-[3/4]" },
	{ cell: "lg:col-span-7 lg:col-start-6 lg:mt-24", ratio: "aspect-[16/10]" },
];

const pad = (n) => String(n).padStart(2, "0");

function ProjectCard({ project, index }) {
	const [imageFailed, setImageFailed] = useState(false);
	const imgRef = useRef(null);

	// L'image peut échouer avant l'hydratation : onError ne se déclenche alors jamais
	useEffect(() => {
		const img = imgRef.current;
		if (img?.complete && img.naturalWidth === 0) setImageFailed(true);
	}, []);
	const layout = layouts[index % layouts.length];
	const isLink = project.href && project.href !== "#";
	const isExternal = isLink && project.href.startsWith("http");
	const Wrapper = isLink ? "a" : "div";

	return (
		<article className={layout.cell}>
			<Wrapper
				{...(isLink && {
					href: project.href,
					target: isExternal ? "_blank" : undefined,
					rel: isExternal ? "noopener noreferrer" : undefined,
				})}
				className='group block rounded-lg'>
				<div
					className={`relative ${layout.ratio} overflow-hidden rounded-lg bg-bw-surface`}>
					{project.image && !imageFailed ? (
						<img
							ref={imgRef}
							src={project.image}
							alt={`${project.title} — project preview`}
							loading='lazy'
							onError={() => setImageFailed(true)}
							className='h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'
						/>
					) : (
						<div className='absolute inset-0 flex items-end justify-between p-5 sm:p-7'>
							<span
								aria-hidden='true'
								className='font-semibold tracking-tighter leading-none text-bw-line text-[clamp(4rem,12vw,9rem)]'>
								{pad(index + 1)}
							</span>
							<span className='font-mono text-xs text-bw-muted'>
								Preview soon
							</span>
						</div>
					)}

					{isLink && (
						<span className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-bw-bg/90 text-bw-fg opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100'>
							<ArrowUpRight size={18} strokeWidth={1.75} />
						</span>
					)}
				</div>

				<div className='mt-5 grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4'>
					<span className='font-mono text-xs tabular-nums text-bw-muted'>
						{pad(index + 1)}
					</span>
					<h3
						className={`font-medium tracking-tight ${
							layout.featured
								? "text-2xl sm:text-3xl"
								: "text-lg sm:text-xl"
						}`}>
						{project.title}
					</h3>
					<span className='font-mono text-xs tabular-nums text-bw-muted'>
						{project.year}
					</span>
					<p className='col-start-2 mt-1.5 max-w-[46ch] text-sm leading-relaxed text-bw-muted'>
						{project.description}
					</p>
					{project.tags?.length > 0 && (
						<p className='col-start-2 mt-3 font-mono text-xs text-bw-fg/70'>
							{project.tags.join(" / ")}
						</p>
					)}
				</div>
			</Wrapper>
		</article>
	);
}

export default function PortfolioSection() {
	return (
		<section
			id='portfolio'
			aria-labelledby='portfolio-title'
			className='relative mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-36 sm:pt-36 sm:pb-44'>
			<header className='mb-16 sm:mb-24 grid gap-6 lg:grid-cols-12 lg:items-end'>
				<div className='lg:col-span-7'>
					<p className='font-mono text-xs text-bw-muted'>
						(01) — Selected work
					</p>
					<h2
						id='portfolio-title'
						className='mt-4 text-4xl sm:text-6xl font-semibold tracking-tighter leading-[0.95]'>
						Things we've designed and built.
					</h2>
				</div>
				<p className='lg:col-span-4 lg:col-start-9 max-w-[40ch] text-sm sm:text-base leading-relaxed text-bw-muted'>
					A few recent projects, from interactive brand sites to product
					interfaces.
				</p>
			</header>

			<div className='grid grid-cols-1 gap-x-10 gap-y-20 sm:gap-y-28 lg:grid-cols-12'>
				{projects.map((project, index) => (
					<ProjectCard key={project.title} project={project} index={index} />
				))}
			</div>
		</section>
	);
}
