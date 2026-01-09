"use client";

import { Link } from "@heroui/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Utiliser le thème actuel ou le thème système en fallback
	const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "dark";
	const linkColor = currentTheme === "dark" ? "#FFFFFF" : "#303030";

	return (
		<footer className='w-full flex flex-col items-center justify-center py-8'>
			<Link
				href='/legal'
				style={{ color: linkColor }}
				className='hover:underline underline-offset-4 text-sm select-none'>
				Legal notice
			</Link>
			<p className='text-xs text-gray-600 mt-2 select-none'>
				©2026 - badwork | digital - all rights reserved.
			</p>
		</footer>
	);
}
