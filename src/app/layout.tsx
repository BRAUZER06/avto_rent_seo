import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	metadataBase: new URL('https://rentavtokavkaz.ru'),
	alternates: {
		canonical: 'https://rentavtokavkaz.ru',
	},
	title:
		'Аренда авто в Дагестане, Осетии, Ингушетии, Чечне и других регионах СКФО',
	description:
		'Платформа для аренды автомобилей с водителем и без - Ингушетия, Чечня, Дагестан, Осетия, КБР, КЧР. Удобный поиск, честные условия, без скрытых комиссий.',
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
			'Надёжная аренда авто в Дагестане, Осетии, Ингушетии, Чечне, КБР и КЧР - без посредников.',
		url: 'https://rentavtokavkaz.ru',
		siteName: 'Rentavtokavkaz',
		images: [
			{
				url: 'https://rentavtokavkaz.ru/car-min.jpeg',
				width: 1200,
				height: 630,
				alt: 'Аренда авто на Северном Кавказе',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
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

				{/* Schema.org разметка */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'LocalBusiness',
							name: 'Rentavtokavkaz',
							url: 'https://rentavtokavkaz.ru',
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

				{/* Яндекс.Метрика */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(103382541, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true,
                   webvisor:true
              });
            `,
					}}
				/>
				<noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/103382541'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>

				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-92DNKBRJKS'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-92DNKBRJKS');
            `,
					}}
				/>
			</head>
			<body>{children}</body>
		</html>
	)
}
