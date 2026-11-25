"use client";

import { useEffect } from "react";

// Logo BADWORK rempli (généré depuis le SVG de BadworkLogo, en braille)
const ART = `
⢸⣿⣿⣿⣿⣿⣷⣶⣦⠀⠀⢠⣾⣿⣿⣿⣿⣷⡀⠀⠀⣿⣿⣿⣿⣿⣷⣶⣶⣤⠀⢿⣿⣿⡆⠀⣾⣿⣿⡆⠀⣾⣿⣿⡇⢠⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⡀⢰⣿⣿⣿⣿⣿⣶⣶⣦⡄⢸⣿⣿⣿⠀⣼⣿⣿⡿⠃
⢸⣿⣿⣿⠶⠾⣿⣿⣥⡀⢠⣿⣿⣿⣇⣻⣿⣿⣷⡀⠀⣿⣿⣿⡇⠀⢸⣿⣿⣿⡇⠘⣿⣿⣿⢰⣿⡟⣿⣷⢸⣿⣿⡿⠀⣿⣿⣿⣿⡁⠀⠀⠀⠀⠀⢈⣿⣿⣿⡷⢸⣿⣿⣿⣤⣼⣿⣿⡿⠃⢸⣿⣿⣿⣿⣿⣿⣿⡁
⢸⣿⣿⣿⣿⣿⡿⠿⠟⠁⣾⣿⣿⡿⠛⠛⢿⣿⣿⣷⠀⣿⣿⣿⣿⣿⡿⠿⠿⠛⠀⠀⠹⣿⣿⣿⡿⠁⠹⣿⣿⣿⣿⠃⠀⠘⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠁⢸⣿⣿⣿⡏⠙⣿⣿⣿⡆⢸⣿⣿⣿⠀⠻⣿⣿⣿⡄
`;

// Évite le double log du StrictMode en dev
let printed = false;

export default function ConsoleArt() {
	useEffect(() => {
		if (printed) return;
		printed = true;

		console.log(
			`%c${ART}`,
			"font-family: monospace; line-height: 1;",
		);
		console.log(
			"%c> Ouvrir la console, c'est déjà parler la même langue.\n> Next.js · WebGL · iOS / Android · desktop\n> Une idée, un bug, un side project ? → %cmailto:dev@badwork.fr",
			"font-family: monospace; color: #888; line-height: 1.6;",
			"font-family: monospace; color: inherit; text-decoration: underline;",
		);
	}, []);

	return null;
}
