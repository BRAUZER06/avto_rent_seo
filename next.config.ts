/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['ingrentcar.ru', 'www.ingrentcar.ru', 'localhost'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ingrentcar.ru',
			},
			{
				protocol: 'https',
				hostname: 'www.ingrentcar.ru',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
		]
	},
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'www.rentavtokavkaz.ru',
					},
				],
				destination: 'https://rentavtokavkaz.ru/:path*',
				permanent: true,
			},
		]
	},
}

export default nextConfig
