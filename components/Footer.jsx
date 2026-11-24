import NextLink from "next/link";

const linkClass =
	"underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-current";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='w-full border-t border-bw-line'>
			<div className='mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 sm:px-8 pt-8 pb-10 font-mono text-xs text-bw-muted sm:flex-row sm:items-center sm:justify-between'>
				<p className='select-none tabular-nums'>
					© {year} badwork | digital. All rights reserved.
				</p>
				<nav aria-label='Footer' className='flex gap-6'>
					<a
						href='mailto:contact@badwork.fr'
						className={`${linkClass} text-bw-fg`}>
						contact@badwork.fr
					</a>
					<NextLink
						href='/legal'
						className={`${linkClass} text-bw-fg`}>
						Legal notice
					</NextLink>
				</nav>
			</div>
		</footer>
	);
}
