import { Link } from 'react-router-dom'
import { IconBook, IconCalendar, IconChart, IconArrowRight, IconSparkles } from '../components/icons.jsx'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80'

export default function Home() {
  return (
    <div className="bento">
      {/* Hero */}
      <article className="card bento-hero reveal">
        <div className="hero-content">
          <span className="pill">
            <IconSparkles size={14} /> Интерактивная лаборатория питания
          </span>
          <div>
            <h1>Твоя <em>лаборатория</em><br />питания</h1>
            <p>
              Изучай продукты, собирай рацион на неделю и получай понятную
              обратную связь о том, что ты ешь. Без диагнозов и обещаний —
              только факты и цифры.
            </p>
          </div>
          <div className="hero-actions">
            <Link to="/catalog" className="btn btn-primary">
              Открыть каталог <IconArrowRight />
            </Link>
            <Link to="/planner" className="btn btn-ghost">
              Собрать рацион
            </Link>
          </div>
        </div>
      </article>

      {/* Hero photo */}
      <article className="card card-photo bento-photo reveal">
        <img src={HERO_IMAGE} alt="Свежий салат с авокадо и овощами" loading="lazy" />
        <div className="photo-overlay">
          <h3>Свежесть в каждой детали</h3>
          <p>60+ продуктов с полной нутритивной ценностью</p>
        </div>
      </article>

      {/* Features */}
      <article className="card card-sage bento-feature reveal">
        <div className="feature-icon"><IconBook /></div>
        <h3>Каталог</h3>
        <p>Калории, БЖУ, клетчатка, витамины и минералы — по каждому продукту.</p>
      </article>

      <article className="card bento-feature reveal">
        <div className="feature-icon"><IconCalendar /></div>
        <h3>Планировщик</h3>
        <p>Собери рацион на 7 дней: выбирай продукты и указывай граммовки.</p>
      </article>

      <article className="card card-matcha bento-feature reveal">
        <div className="feature-icon"><IconChart /></div>
        <h3>Анализатор</h3>
        <p>Автоматический расчёт нутриентов и научно обоснованные пояснения.</p>
      </article>
    </div>
  )
}