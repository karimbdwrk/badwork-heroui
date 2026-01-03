"use client";

import { useEffect, useState } from "react";
import {
	isLikelySmartphone,
	isTablet,
	isLandscape,
	isTouchDevice,
} from "@/utils/device";

export default function OrientationGuard() {
	const [block, setBlock] = useState(false);

	useEffect(() => {
		const check = () => {
			// sécurité SSR
			if (typeof window === "undefined") return;

			const landscape = isLandscape();
			const smartphone = isLikelySmartphone();
			const tablet = isTablet();
			const touch = isTouchDevice();

			// LOGIQUE CLÉ
			const shouldBlock = landscape && smartphone && touch && !tablet;

			setBlock(shouldBlock);
		};

		check();
		window.addEventListener("resize", check);
		window.addEventListener("orientationchange", check);

		return () => {
			window.removeEventListener("resize", check);
			window.removeEventListener("orientationchange", check);
		};
	}, []);

	if (!block) return null;

	return (
		<div
			style={{
				position: "fixed",
				inset: 0,
				background: "#000",
				color: "#fff",
				zIndex: 9999,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
				userSelect: "none",
			}}>
			<div>
				<p style={{ fontSize: "1.3rem", marginBottom: "0.8rem" }}>
					Please rotate your device
				</p>
				<p style={{ opacity: 0.7 }}>
					This experience is designed for portrait mode
				</p>
			</div>
		</div>
	);
}
