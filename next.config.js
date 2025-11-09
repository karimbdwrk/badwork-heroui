/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
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
			{
				protocol: "https",
				hostname: "wmxnxnwivbmywhnsqgya.supabase.co",
			},
		],
	},
	env: {
		NEXT_PUBLIC_SUPABASE_URL: "https://wmxnxnwivbmywhnsqgya.supabase.co",
		NEXT_PUBLIC_SUPABASE_ANON_KEY:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndteG54bndpdmJteXdobnNxZ3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NjE1MTksImV4cCI6MjA3NzIzNzUxOX0.zB1C1k8_ytIvIR_lLjh74fB7dc8sAJon93bb-I-vjLo",
		// RESEND_API_KEY: process.env.RESEND_API_KEY,
		// EMAIL_TO: process.env.EMAIL_TO,
		// EMAIL_FROM: process.env.EMAIL_FROM,
	},
};

module.exports = nextConfig;
