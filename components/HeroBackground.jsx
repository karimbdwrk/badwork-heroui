"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

// WebGL2 : rendu côté client uniquement
const SwarmCursor = dynamic(() => import("@/components/SwarmCursor"), {
	ssr: false,
});

export default function HeroBackground() {
	const { resolvedTheme } = useTheme();

	return (
		<div
			style={{
				width: "100vw",
				height: "calc(var(--vh, 1vh) * 100)",
				position: "absolute",
				zIndex: 0,
				top: 0,
				left: 0,
			}}>
			{/* Particules noires sur fond blanc en thème clair, blanches en sombre */}
			<SwarmCursor lightMode={resolvedTheme === "light"} />
		</div>
	);
}
