import NextLink from "next/link";

export const metadata = {
	title: "Page not found",
	robots: { index: false },
};

export default function NotFound() {
	return (
		<section className='mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-center px-5 sm:px-8 pt-24 pb-32'>
			<p className='font-mono text-xs tabular-nums text-bw-muted'>
				404
			</p>
			<h1 className='mt-4 max-w-[16ch] text-4xl sm:text-6xl font-semibold tracking-tighter leading-[0.95]'>
				This page doesn't exist.
			</h1>
			<p className='mt-6 max-w-[42ch] text-sm sm:text-base leading-relaxed text-bw-muted'>
				The link may be outdated, or the address mistyped. Everything
				we do lives on the home page.
			</p>
			<NextLink
				href='/'
				className='mt-10 inline-flex h-12 w-fit items-center rounded-md bg-foreground px-8 font-medium tracking-tight text-background transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.98]'>
				Back to home
			</NextLink>
		</section>
	);
}
