"use client";

import { useEffect, useState } from "react";

import { Button } from "@heroui/button";
import { Image } from "@heroui/react";
import { russoOne } from "@/app/fonts";
import HeroBackground from "@/components/HeroBackground";

export default function HeroSection() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth < 450);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<div className='hero-container h-screen w-screen overflow-hidden flex flex-col items-center justify-center'>
			<HeroBackground />
			<div className='intro flex flex-col items-center justify-center z-10 text-center px-4'>
				{/* <h1
					className={`${russoOne.className} text-6xl sm:text-9xl font-bold hero-title`}>
					BADWORK
				</h1> */}
				<Image
					alt='HeroUI hero Image'
					src='https://badwork-bucket.s3.eu-west-3.amazonaws.com/newbad-stretch.svg'
					width={isMobile ? 350 : 900}
					radius='none'
				/>
				<p className='text-xs sm:text-lg mt-4'>
					Design and creation converge to shape human-centered
					experiences.
				</p>
				<Button
					className='mt-12 bg-white text-black hover:bg-gray-200 pl-12 pr-12'
					// radius='full'
					onPress={() => scrollToSection("contact")}>
					CONTACT US
				</Button>
			</div>
		</div>
	);
}
