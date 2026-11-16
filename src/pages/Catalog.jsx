const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Авокадо',
    kcal: 160,
    p: 2, f: 15, c: 9,
    img: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=600&q=80',
    category: 'Фрукты',
  },
  {
    id: 2,
    name: 'Лосось',
    kcal: 208,
    p: 20, f: 13, c: 0,
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    category: 'Белки',
  },
  {
    id: 3,
    name: 'Греческий йогурт',
    kcal: 59,
    p: 10, f: 0, c: 4,
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    category: 'Молочное',
  },
  {
    id: 4,
    name: 'Киноа',
    kcal: 120,
    p: 4, f: 2, c: 21,
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    category: 'Зерновые',
  },
const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Авокадо',         kcal: 160, p: 2,  f: 15, c: 9,  category: 'Фрукты' },
  { id: 2, name: 'Лосось',          kcal: 208, p: 20, f: 13, c: 0,  category: 'Белки' },
  { id: 3, name: 'Греческий йогурт', kcal: 59,  p: 10, f: 0,  c: 4,  category: 'Молочное' },
  { id: 4, name: 'Киноа',           kcal: 120, p: 4,  f: 2,  c: 21, category: 'Зерновые' },
  { id: 5, name: 'Черника',         kcal: 57,  p: 1,  f: 0,  c: 14, category: 'Фрукты' },
  { id: 6, name: 'Шпинат',          kcal: 23,  p: 3,  f: 0,  c: 4,  category: 'Овощи' },
]

const CATEGORIES = ['Все', 'Овощи', 'Фрукты', 'Белки', 'Зерновые', 'Молочное']

export default function Catalog() {
  return (
    <>
      <div className="section-head">
        <div>
          <h2>Каталог продуктов</h2>
          <p>Изучай нутритивную ценность — калории, БЖУ, клетчатку и микроэлементы.</p>
        </div>
      </div>

      <div className="filters">
        {CATEGORIES.map((c, i) => (
          <button key={c} className={`filter-pill ${i === 0 ? 'active' : ''}`} type="button">
            {c}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {SAMPLE_PRODUCTS.map((prod) => (
          <article key={prod.id} className="product-card">
            <div className="product-photo" data-cat={prod.category}>
              <span className="product-initial">{prod.name[0]}</span>
            </div>
            <div className="product-body">
              <h3>{prod.name}</h3>
              <span className="product-kcal num">{prod.kcal} ккал / 100 г</span>
              <div className="macros">
                <span className="macro macro-p num">Б {prod.p}</span>
                <span className="macro macro-f num">Ж {prod.f}</span>
                <span className="macro macro-c num">У {prod.c}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}