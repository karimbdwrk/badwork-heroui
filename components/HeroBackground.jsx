"use client";

import dynamic from "next/dynamic";

// Charger Dither côté client uniquement
const Dither = dynamic(() => import("@/components/Dither"), { ssr: false });

export default function HeroBackground() {
	return (
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
	);
}
