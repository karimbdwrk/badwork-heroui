"use client";

import dynamic from "next/dynamic";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

// import Dither from "../components/Dither";
const Dither = dynamic(() => import("@/components/Dither"), { ssr: false });

import { russoOne } from "./fonts";

import styles from "../styles/page.module.css";

export default function Home() {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<>
			<div className='hero-container h-screen w-screen overflow-hidden flex flex-col items-center justify-center'>
				<div
					style={{
						width: "100vw",
						height: "100vh",
						position: "absolute",
						zIndex: -1,
					}}>
					<Dither
						waveColor={[0.5, 0.5, 0.5]}
						disableAnimation={false}
						enableMouseInteraction={true}
						mouseRadius={0.3}
						colorNum={4}
						waveAmplitude={0.3}
						waveFrequency={3}
						waveSpeed={0.05}
					/>
				</div>
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
			<div
				className='contact-section h-screen w-screen overflow-hidden flex flex-col items-center justify-center'
				id='contact'>
				<p>Contact section</p>
			</div>
		</>
	);
}
