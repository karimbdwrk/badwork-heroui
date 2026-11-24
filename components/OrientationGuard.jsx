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
			role='alertdialog'
			aria-label='Tournez votre appareil'
			className='rotate-device bg-background text-foreground px-8'>
			<div>
				<p className='text-xl font-semibold tracking-tight mb-3'>
					Tournez votre appareil
				</p>
				<p className='text-sm text-bw-muted'>
					Ce site est conçu pour être consulté en mode portrait.
				</p>
			</div>
		</div>
	);
}
