"use client";

import { useEffect, useState } from "react";

export default function OrientationGuard() {
	const [isLandscape, setIsLandscape] = useState(false);

	useEffect(() => {
		const checkOrientation = () => {
			const isMobile = window.innerWidth < 768;
			const landscape = window.innerWidth > window.innerHeight;

			setIsLandscape(isMobile && landscape);
		};

		checkOrientation();
		window.addEventListener("resize", checkOrientation);
		window.addEventListener("orientationchange", checkOrientation);

		return () => {
			window.removeEventListener("resize", checkOrientation);
			window.removeEventListener("orientationchange", checkOrientation);
		};
	}, []);

	if (!isLandscape) return null;

	return (
		<div className='rotate-device'>
			<div>
				<p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
					Please rotate your device
				</p>
				<p style={{ opacity: 0.7 }}>
					This experience is designed for portrait mode
				</p>
			</div>
		</div>
	);
}
