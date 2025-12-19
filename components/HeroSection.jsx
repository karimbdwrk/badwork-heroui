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

	const sendEmail = async () => {
		try {
			console.log("Sending test email...");

			const res = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					to: "karim@badwork.fr",
					subject: "Hello depuis Next.js 15",
					html: "<p>Email envoyé avec <strong>Resend</strong> 🚀</p>",
				}),
			});

			// ❗ fetch ne throw PAS automatiquement
			if (!res.ok) {
				const error = await res.json();
				console.error("Email error:", error);
				throw new Error(error?.message || "Failed to send email");
			}

			const data = await res.json();
			console.log("Email sent successfully:", data);
		} catch (err) {
			console.error("sendEmail failed:", err.message);
		}
	};

	return (
		<div className='hero-container h-screen w-screen overflow-hidden flex flex-col items-center justify-center'>
			<HeroBackground />
			<div className='intro flex flex-col items-center justify-center z-10 text-center px-4'>
				<h1
					className={`${russoOne.className} text-6xl sm:text-9xl font-bold hero-title`}>
					BADWORK
				</h1>
				<p className='text-xs sm:text-lg'>
					Design and creation converge to shape human-centered
					experiences.
				</p>
				<Button
					className='mt-12 bg-white text-black hover:bg-gray-200 pl-12 pr-12'
					// radius='full'
					onPress={() => scrollToSection("contact")}>
					CONTACT US
				</Button>
				<Button
					className='mt-12 bg-white text-black hover:bg-gray-200 pl-12 pr-12'
					// radius='full'
					onPress={sendEmail}>
					test email
				</Button>
			</div>
		</div>
	);
}
