"use client";

import { Button } from "@heroui/button";
import { russoOne } from "@/app/fonts";
import HeroBackground from "@/components/HeroBackground";

export default function HeroSection() {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<div className='hero-container h-screen w-screen overflow-hidden flex flex-col items-center justify-center'>
			<HeroBackground />
			<div className='intro'>
				<h1
					className={`${russoOne.className} text-9xl font-bold hero-title`}>
					BADWORK
				</h1>
				<p>
					Design and creation converge to shape human-centered
					experiences.
				</p>
				<Button
					color='primary'
					onPress={() => scrollToSection("contact")}>
					CONTACT US
				</Button>
			</div>
		</div>
	);
}
