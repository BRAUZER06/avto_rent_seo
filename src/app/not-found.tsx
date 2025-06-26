import './styles.scss'
export default function NotFound() {
	return (
		<div className='not-found'>
			<h1>404 — Страница не найдена</h1>
			<p>Похоже, вы перешли по неверной ссылке.</p>
			<a href='/'>Вернуться на главную</a>
		</div>
	)
}
