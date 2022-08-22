/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ["he_IL"],
		defaultLocale: "he_IL",
	},
};

module.exports = nextConfig;
