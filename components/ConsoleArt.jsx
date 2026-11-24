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
			"%cTu fouilles dans le code ? On devrait parler → https://www.badwork.io",
			"font-family: monospace; color: #888;",
		);
	}, []);

	return null;
}
