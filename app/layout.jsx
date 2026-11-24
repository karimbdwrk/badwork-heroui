import "@/styles/globals.css";
import "@/styles/styles.css";
import Script from "next/script";
import { ToastProvider } from "@heroui/toast";
import clsx from "clsx";

import { Providers } from "./providers";
import { geistSans, geistMono } from "./fonts";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import OrientationGuard from "@/components/OrientationGuard";
import Footer from "@/components/Footer";
import ConsoleArt from "@/components/ConsoleArt";

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
	metadataBase: new URL("https://www.badwork.io"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "https://www.badwork.io",
		siteName: siteConfig.name,
		title: siteConfig.name,
		description: siteConfig.description,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f4f3f0" },
		{ media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
	],
};

export default function RootLayout({ children }) {
	return (
		<html
			suppressHydrationWarning
			lang='en'
			className={clsx(geistSans.variable, geistMono.variable)}>
			<head>
				<Script
					id='gtm'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-TZNCBWL2');
							`,
					}}
				/>
			</head>
			<body className='font-sans bg-background text-foreground'>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-TZNCBWL2'
						height={0}
						width={0}
						style={{
							display: "none",
							visibility: "hidden",
						}}></iframe>
				</noscript>
				<Providers
					themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<a href='#main' className='bw-skip-link'>
						Skip to content
					</a>
					<OrientationGuard />
					<ConsoleArt />
					<div className='flex flex-col min-h-dvh'>
						<div className='fixed top-0 inset-x-0 z-(--z-nav)'>
							<Navbar />
						</div>
						<ToastProvider placement='bottom-center' />
						<main id='main' className='flex-1'>
							{children}
						</main>
						<Footer />
					</div>
					<div aria-hidden='true' className='bw-grain' />
				</Providers>
			</body>
		</html>
	);
}
