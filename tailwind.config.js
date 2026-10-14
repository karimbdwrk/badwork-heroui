import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
				mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
			},
		},
	},
	darkMode: "class",
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						background: "#f4f3f0",
						foreground: "#1b1b1a",
					},
				},
				dark: {
					colors: {
						background: "#0b0b0b",
						foreground: "#ecebe7",
					},
				},
			},
		}),
	],
};

module.exports = config;
