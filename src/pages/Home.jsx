import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Твоя лаборатория питания</h1>
        <p>
          Изучай продукты, собирай рацион на неделю и получай научно обоснованную
          обратную связь о том, что ты ешь.
        </p>
        <div className="hero-actions">
          <Link to="/catalog" className="btn btn-primary">Открыть каталог</Link>
          <Link to="/planner" className="btn btn-secondary">Собрать рацион</Link>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h3>🥦 Каталог продуктов</h3>
          <p>60–80 продуктов с калориями, БЖУ, клетчаткой и микроэлементами.</p>
        </div>
        <div className="card">
          <h3>📅 Планировщик</h3>
          <p>Собери рацион на 7 дней: выбирай продукты и указывай граммовки.</p>
        </div>
        <div className="card">
          <h3>🔬 Анализатор</h3>
          <p>Автоматический расчёт нутриентов и понятные объяснения без диагнозов.</p>
        </div>
      </section>
    </>
  )
}