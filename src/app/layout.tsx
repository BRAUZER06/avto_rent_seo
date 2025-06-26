import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title:
		'Аренда авто в Дагестане, Осетии, Ингушетии, Чечне и других регионах СКФО',
	description:
		'Платформа для аренды автомобилей с водителем и без — Ингушетия, Чечня, Дагестан, Осетия, КБР, КЧР. Удобный поиск, честные условия, без скрытых комиссий.',
	keywords: [
		'аренда авто',
		'авто напрокат',
		'аренда авто без водителя',
		'аренда авто с водителем',
		'Ингушетия аренда',
		'Чечня прокат авто',
		'Дагестан аренда машин',
		'Кабардино-Балкария',
		'Осетия авто',
		'Карачаево-Черкесия аренда авто',
		'Ставропольский край прокат авто',
		'Северный Кавказ',
	],
	openGraph: {
		title: 'Аренда автомобилей в СКФО',
		description:
			'Надёжная аренда авто в Дагестане, Осетии, Ингушетии, Чечне, КБР и КЧР — без посредников.',
		url: 'https://renting-avto.ru',
		siteName: 'Renting-Avto',
		images: [
			{
				url: 'https://renting-avto.ru/car-min.jpeg',
				width: 1200,
				height: 630,
				alt: 'Аренда авто на Северном Кавказе',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	metadataBase: new URL('https://renting-avto.ru'),
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'LocalBusiness',
							name: 'Renting-Avto',
							url: 'https://renting-avto.ru',
							description:
								'Аренда авто в республиках Северного Кавказа — от частных лиц и компаний',
							areaServed: [
								'RU-DA',
								'RU-IN',
								'RU-CE',
								'RU-KB',
								'RU-KC',
								'RU-SE',
								'RU-STA',
							],
							availableLanguage: 'Russian',
						}),
					}}
				/>
			</head>
			<body>{children}</body>
		</html>
	)
}
