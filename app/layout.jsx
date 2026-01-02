import "@/styles/globals.css";
import "@/styles/styles.css";
import { Metadata, Viewport } from "next";
import Script from "next/script";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { Roboto_Mono } from "next/font/google";

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto-mono",
});

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({ children }) {
	return (
		<html
			suppressHydrationWarning
			lang='en'
			className={robotoMono.variable}>
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
			<body className={robotoMono.className}>
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
					<div className='flex flex-col h-screen'>
						{/* <Navbar /> */}
						<main>{children}</main>
						<footer className='w-full flex flex-col items-center justify-center py-8'>
							{/* <div
								style={{
									position: "absolute",
									bottom: 0,
									paddingBottom: 30,
									width: "100%",
									textAlign: "center",
								}}> */}
							<Link
								href='/legal'
								className='text-white hover:underline underline-offset-4 text-sm select-none'>
								Legal notice
							</Link>
							<p className='text-xs text-gray-600 mt-2 select-none'>
								©2026 - badwork | digital - all rights
								reserved.
							</p>
							{/* </div> */}
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
