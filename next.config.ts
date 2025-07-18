/** @type {import('next').NextConfig} */
const nextConfig = {
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
