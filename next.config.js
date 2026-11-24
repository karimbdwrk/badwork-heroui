/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Un package-lock.json dans ~ fait choisir le mauvais root à Turbopack
	turbopack: {
		root: __dirname,
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "heroui.com",
			},
		],
	},
};

module.exports = nextConfig;
