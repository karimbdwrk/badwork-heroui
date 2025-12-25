"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export default function LogoMorph() {
	const containerRef = useRef(null);
	const oPathRef = useRef(null);
	const eyeLeftRef = useRef(null);
	const eyeRightRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const oPath = oPathRef.current;
		const eyeL = eyeLeftRef.current;
		const eyeR = eyeRightRef.current;

		if (!container || !oPath || !eyeL || !eyeR) return;

		const morph = anime({
			targets: oPath,
			d: [
				{
					value: "M877.82,99.43h-165c-27.34,0-49.5-22.16-49.5-49.5s22.16-49.5,49.5-49.5h165c27.34,0,49.5,22.16,49.5,49.5s-22.16,49.5-49.5,49.5Z",
				},
				{
					value: "M857.82,99.43h-205c-27.34,0-49.5-22.16-49.5-49.5s22.16-49.5,49.5-49.5h205c27.34,0,49.5,22.16,49.5,49.5s-22.16,49.5-49.5,49.5Z",
				},
			],
			duration: 450,
			easing: "easeInOutQuad",
			autoplay: false,
		});

		const handleEnter = () => morph.play();

		const handleLeave = () => {
			morph.reverse();
			morph.play();

			anime({
				targets: [eyeL, eyeR],
				translateX: 0,
				duration: 300,
				easing: "easeOutQuad",
			});
		};

		const handleMove = (e) => {
			const bounds = container.getBoundingClientRect();
			const x = e.clientX - bounds.left;
			const ratio = (x / bounds.width - 0.5) * 2;
			const maxOffset = 6;

			anime.set(eyeL, { translateX: ratio * maxOffset });
			anime.set(eyeR, { translateX: ratio * maxOffset });
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
					{/* BADWORK paths */}
					{/* … inchangés … */}

					{/* O */}
					<g>
						<path
							ref={oPathRef}
							d='M877.82,99.43h-165c-27.34,0-49.5-22.16-49.5-49.5s22.16-49.5,49.5-49.5h165c27.34,0,49.5,22.16,49.5,49.5s-22.16,49.5-49.5,49.5Z'
						/>
						<circle
							ref={eyeLeftRef}
							cx='739.21'
							cy='50'
							r='9'
							fill='#000'
						/>
						<circle
							ref={eyeRightRef}
							cx='763.21'
							cy='50'
							r='9'
							fill='#000'
						/>
					</g>
				</g>
			</svg>
		</div>
	);
}
