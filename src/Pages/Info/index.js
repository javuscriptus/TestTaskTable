import { Link } from 'react-router-dom'

export const Info = () => {
    return (
        <div className="info">
            <h1>Страница с информацией</h1>
            <Link to="/">Назад</Link>
        </div>
    )
}