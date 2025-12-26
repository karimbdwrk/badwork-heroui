"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export default function LogoMorph() {
	const containerRef = useRef(null);

	const oPathRef = useRef(null);
	const eyesRef = useRef(null);
	const leftRef = useRef(null);
	const rightRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const oPath = oPathRef.current;
		const eyes = eyesRef.current;
		const left = leftRef.current;
		const right = rightRef.current;

		if (!oPath || !eyes || !left || !right) return;

		// Timeline hover IN
		const hoverIn = anime.timeline({
			autoplay: false,
			easing: "easeInOutQuad",
		});

		hoverIn
			// Écarter BADW / RK
			.add({
				targets: left,
				translateX: -40,
				duration: 300,
			})
			.add(
				{
					targets: right,
					translateX: 40,
					duration: 300,
				},
				0
			)

			// Étirement du O
			.add({
				targets: oPath,
				d: {
					value: oPath.getAttribute("data-stretched"),
				},
				duration: 400,
			})

			// Apparition des yeux (APRES l'étirement)
			.add({
				targets: eyes,
				opacity: [0, 1],
				duration: 200,
			});

		// Timeline hover OUT
		const hoverOut = anime.timeline({
			autoplay: false,
			easing: "easeInOutQuad",
		});

		hoverOut
			// Disparition des yeux
			.add({
				targets: eyes,
				opacity: [1, 0],
				duration: 150,
			})

			// Retour du O
			.add({
				targets: oPath,
				d: {
					value: oPath.getAttribute("data-normal"),
				},
				duration: 400,
			})

			// Retour BADW / RK
			.add({
				targets: left,
				translateX: 0,
				duration: 300,
			})
			.add(
				{
					targets: right,
					translateX: 0,
					duration: 300,
				},
				"-=300"
			);

		const handleEnter = () => {
			hoverOut.pause();
			hoverIn.restart();
		};

		const handleLeave = () => {
			hoverIn.pause();
			hoverOut.restart();
		};

		const handleMove = (e) => {
			if (parseFloat(getComputedStyle(eyes).opacity) === 0) return;

			const bounds = container.getBoundingClientRect();
			const x = e.clientX - bounds.left;
			const ratio = (x / bounds.width - 0.5) * 2;

			anime.set(eyes, {
				translateX: ratio * 6,
			});
		};

		container.addEventListener("mouseenter", handleEnter);
		container.addEventListener("mouseleave", handleLeave);
		container.addEventListener("mousemove", handleMove);

		return () => {
			container.removeEventListener("mouseenter", handleEnter);
			container.removeEventListener("mouseleave", handleLeave);
			container.removeEventListener("mousemove", handleMove);
		};
	}, []);

	return (
		<div ref={containerRef} style={{ width: "100%", cursor: "pointer" }}>
			<svg viewBox='0 0 1226.64 99.74' width='100%'>
				<g fill='#fff'>
					{/* BADW */}
					<g ref={leftRef}>
						<path d='M0,99.34V.08c19.36,0,38.72,0,58.08,0h3.77c8.11,0,16.23,0,24.34,0,5.05-.24,21.4-.27,33.82,5.2,7.87,3.47,11.81,9.43,11.81,17.88,0,6.4-2.07,11.49-6.2,15.28-4.14,3.78-10.56,6.25-19.28,7.4v.27c9.43,1.25,16.83,4.03,22.21,8.34,5.38,4.32,8.07,9.94,8.07,16.88,0,10.94-4.67,18.34-14.01,22.21-9.34,3.87-21.53,5.8-36.56,5.8H0ZM72.45,40.51c3.02,0,5.27-.47,6.74-1.4,1.47-.93,2.2-2.42,2.2-4.47,0-2.31-.69-4-2.07-5.07-1.38-1.07-3.49-1.6-6.34-1.6-.42,0-12.52,0-12.64,0-.04,0-3.3,0-3.34,0h-2.43v12.54s2.86,0,2.89,0h2.88s12.05,0,12.11,0ZM72.71,71.46c3.29,0,5.71-.56,7.27-1.67,1.56-1.11,2.33-3,2.33-5.67,0-2.31-.85-4-2.53-5.07-1.69-1.07-4.23-1.6-7.6-1.6-.37,0-11.41,0-11.54,0-.04,0-3.45,0-3.49,0h-2.59v14.01s2.28,0,2.29,0c.02,0,3.46,0,3.48,0,.08,0,12.11,0,12.38,0Z' />
						<path d='M298.19,99.34h-60.17l-4-14.94h-31.75l-3.87,14.94h-60.04L176.38.08h82.59l39.23,99.27ZM216.94,28.63l-7.74,29.62h17.88l-7.87-29.62-.8-4.14h-.67l-.8,4.14Z' />
						<path d='M306.87,99.34V.08h77.52c22.86,0,39.58,4.45,50.17,13.34,10.58,8.9,15.88,21.04,15.88,36.42s-5.2,27.37-15.61,36.22c-10.41,8.85-27.22,13.28-50.43,13.28h-77.52ZM374.78,67.99c5.78,0,10.27-1.4,13.48-4.2,3.2-2.8,4.8-7.45,4.8-13.94s-1.6-11.29-4.8-14.14c-3.2-2.84-7.74-4.27-13.61-4.27h-11.21v36.56h11.34Z' />
						<path d='M544.49,99.34h-63.77L453.49.08h53.9l12.14,63.51.4,2.54h.27l.67-3.07L535.28.08h44.56l14.41,62.98.67,2.94h.27l.4-2.4L607.59.08h54.04l-27.22,99.27h-63.77l-12.54-56.7-.4-2.27h-.27l-.4,2.27-12.54,56.7Z' />
					</g>

					{/* O */}
					<g>
						<path
							ref={oPathRef}
							data-normal='M544.49,99.34h-63.77L453.49.08h53.9l12.14,63.51.4,2.54h.27l.67-3.07L535.28.08h44.56l14.41,62.98.67,2.94h.27l.4-2.4L607.59.08h54.04l-27.22,99.27h-63.77l-12.54-56.7-.4-2.27h-.27l-.4,2.27-12.54,56.7Z'
							data-stretched='M833.83,99h-120c-27.34,0-49.5-22.16-49.5-49.5h0c0-27.34,22.16-49.5,49.5-49.5h120c27.34,0,49.5,22.16,49.5,49.5h0c0,27.34-22.16,49.5-49.5,49.5ZM825.33,49.5h0c0-8.41-6.82-15.23-15.23-15.23h-72.54c-8.41,0-15.23,6.82-15.23,15.23h0c0,8.41,6.82,15.23,15.23,15.23h72.54c8.41,0,15.23-6.82,15.23-15.23Z'
							d='M833.83,99h-120c-27.34,0-49.5-22.16-49.5-49.5h0c0-27.34,22.16-49.5,49.5-49.5h120c27.34,0,49.5,22.16,49.5,49.5h0c0,27.34-22.16,49.5-49.5,49.5ZM825.33,49.5h0c0-8.41-6.82-15.23-15.23-15.23h-72.54c-8.41,0-15.23,6.82-15.23,15.23h0c0,8.41,6.82,15.23,15.23,15.23h72.54c8.41,0,15.23-6.82,15.23-15.23Z'
						/>
						{/* <path d='M833.83,99h-120c-27.34,0-49.5-22.16-49.5-49.5h0c0-27.34,22.16-49.5,49.5-49.5h120c27.34,0,49.5,22.16,49.5,49.5h0c0,27.34-22.16,49.5-49.5,49.5ZM825.33,49.5h0c0-8.41-6.82-15.23-15.23-15.23h-72.54c-8.41,0-15.23,6.82-15.23,15.23h0c0,8.41,6.82,15.23,15.23,15.23h72.54c8.41,0,15.23-6.82,15.23-15.23Z' /> */}

						<g ref={eyesRef} opacity='0'>
							<circle cx='739.21' cy='50' r='9' fill='#fff' />
							<circle cx='763.21' cy='50' r='9' fill='#fff' />
						</g>
					</g>

					{/* RK */}
					<g ref={rightRef}>
						<path d='M893.4,99.34V.08h79.38c20.1,0,34.6,3,43.49,9.01,8.89,6,13.34,14.17,13.34,24.48,0,6.76-1.94,12.5-5.81,17.21-3.87,4.72-9.54,8-17.01,9.87v.13c4.09,1.25,7.25,2.67,9.47,4.27,2.22,1.6,3.96,3.69,5.2,6.27,1.25,2.58,2.4,6.18,3.47,10.81l.8,3.07c1.07,5.25,2.44,9.96,4.13,14.14h-55.5c-1.25-2.49-2.27-6.71-3.07-12.67l-.53-2.94c-.45-2.58-1.56-4.56-3.34-5.94-1.78-1.38-4.67-2.07-8.67-2.07h-8.81v23.62h-56.57ZM963.71,48.24c3.38,0,5.96-.75,7.74-2.27,1.78-1.51,2.67-3.65,2.67-6.4s-.91-4.71-2.73-6.14c-1.82-1.42-4.38-2.14-7.67-2.14h-13.74v16.95h13.74Z' />

						<path d='M1096.47,99.34h-56.57V.08h56.57v34.15h7.47L1117.15.08h60.44l-25.62,48.17v1.07l29.89,50.03h-61.64l-16.28-33.89h-7.47v33.89Z' />
					</g>
				</g>
			</svg>
		</div>
	);
}
