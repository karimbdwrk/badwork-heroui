/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["localhost", "heroui.com"], // Ajoutez ici le domaine de vos images
	},
	env: {
		NEXT_PUBLIC_SUPABASE_URL: "https://wmxnxnwivbmywhnsqgya.supabase.co",
		SUPABASE_SERVICE_ROLE_KEY:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndteG54bndpdmJteXdobnNxZ3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NjE1MTksImV4cCI6MjA3NzIzNzUxOX0.zB1C1k8_ytIvIR_lLjh74fB7dc8sAJon93bb-I-vjLo",
		RESEND_API_KEY: "re_YztwPX4R_7FAw6NyiJqJiMB7iTETZkPgm",
		EMAIL_TO: "karim@badwork.fr",
		EMAIL_FROM: "no-reply@badwork.fr",
	},
};

module.exports = nextConfig;
