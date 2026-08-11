"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight } from "lucide-react";

const projects = [
	{
		title: "Project One",
		description: "A short line about what this project is and does.",
		image: "/projects/project-1.jpg",
		tags: ["Next.js", "Three.js"],
		href: "#",
	},
	{
		title: "Project Two",
		description: "A short line about what this project is and does.",
		image: "/projects/project-2.jpg",
		tags: ["React", "GSAP"],
		href: "#",
	},
	{
		title: "Project Three",
		description: "A short line about what this project is and does.",
		image: "/projects/project-3.jpg",
		tags: ["Node.js", "Supabase"],
		href: "#",
	},
];

export default function PortfolioSection() {
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = mounted
		? theme === "system"
			? systemTheme
			: theme
		: "dark";
	const textColor = currentTheme === "dark" ? "#FFFFFF" : "#303030";
	const borderColor = currentTheme === "dark" ? "#303030" : "#e5e5e5";
	const imgBg = currentTheme === "dark" ? "#111111" : "#f2f2f2";

	return (
		<section
			id='portfolio'
			className='relative w-screen min-h-screen flex flex-col items-center justify-center px-5 py-24'>
			<div className='text-center mb-12'>
				<h2
					className='text-2xl sm:text-3xl font-bold select-none'
					style={{ color: textColor }}>
					Selected Work
				</h2>
				<p
					className='text-xs sm:text-lg select-none'
					style={{ color: textColor }}>
					A few projects I've designed and built.
				</p>
			</div>

			<div className='grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((project) => (
					<a
						key={project.title}
						href={project.href}
						target={
							project.href?.startsWith("http")
								? "_blank"
								: undefined
						}
						rel={
							project.href?.startsWith("http")
								? "noopener noreferrer"
								: undefined
						}
						className='group relative flex flex-col overflow-hidden rounded-2xl border transition-colors duration-300'
						style={{ borderColor }}>
						<div
							className='relative aspect-[4/3] overflow-hidden'
							style={{ backgroundColor: imgBg }}>
							<img
								src={project.image}
								alt={project.title}
								className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
							/>
							<div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40'>
								<ArrowUpRight
									size={28}
									className='text-white opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0'
								/>
							</div>
						</div>

						<div className='flex flex-col gap-1 p-4'>
							<h3
								className='text-sm sm:text-base font-bold select-none'
								style={{ color: textColor }}>
								{project.title}
							</h3>
							<p
								className='text-xs sm:text-sm opacity-70 select-none'
								style={{ color: textColor }}>
								{project.description}
							</p>
							{project.tags?.length > 0 && (
								<div className='flex flex-wrap gap-2 mt-2'>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className='rounded-full border px-2 py-0.5 text-[10px] font-mono select-none'
											style={{ borderColor, color: textColor }}>
											{tag}
										</span>
									))}
								</div>
							)}
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
