import { useEffect, useMemo, useState } from 'react'
import products from '../data/products.json'
import { ProductIllustration } from '../components/illustrations.jsx'
import { IconSearch, IconClose, IconCheck, IconPlus } from '../components/icons.jsx'

const BASKET_KEY = 'foodlab:basket'

export default function Catalog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Все')
  const [selected, setSelected] = useState(null)
  const [basket, setBasket] = useState(() => {
    try { return JSON.parse(localStorage.getItem(BASKET_KEY) || '[]') } catch { return [] }
  })

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category))
    return ['Все', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      if (category !== 'Все' && p.category !== category) return false
      if (q && !p.name.toLowerCase().includes(q)) return false
      return true
    })
  }, [query, category])

  const toggleBasket = (id) => {
    setBasket((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      localStorage.setItem(BASKET_KEY, JSON.stringify(next))
      return next
    })
  }

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [selected])

  return (
    <>
      <div className="section-head">
        <div>
          <h2>Каталог продуктов</h2>
          <p>Изучай нутритивную ценность — калории, БЖУ, клетчатку и микроэлементы.</p>
        </div>
        <span className="pill">
          В рационе: <span className="num">{basket.length}</span>
        </span>
      </div>

      <div className="catalog-controls">
        <div className="search-wrap">
          <IconSearch size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Найти продукт…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Поиск по продуктам"
          />
          {query && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setQuery('')}
              aria-label="Очистить поиск"
            >
              <IconClose size={14} />
            </button>
          )}
        </div>

        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter-pill ${category === c ? 'active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>Ничего не найдено. Попробуй другой запрос или категорию.</p>
        </div>
      ) : (
        <div className="catalog-grid">
          {filtered.map((prod) => {
            const inBasket = basket.includes(prod.id)
            return (
              <article
                key={prod.id}
                className="product-card"
                onClick={() => setSelected(prod)}
              >
                <div className="product-photo" data-cat={prod.category}>
                  <ProductIllustration name={prod.illustration} category={prod.category} />
                </div>
                <div className="product-body">
                  <div className="product-head">
                    <h3>{prod.name}</h3>
                    <button
                      type="button"
                      className={`basket-btn ${inBasket ? 'in' : ''}`}
                      onClick={(e) => { e.stopPropagation(); toggleBasket(prod.id) }}
                      aria-label={inBasket ? 'Убрать из рациона' : 'Добавить в рацион'}
                    >
                      {inBasket ? <IconCheck size={14} /> : <IconPlus size={14} />}
                    </button>
                  </div>
                  <span className="product-kcal num">{prod.kcal} ккал / 100 г</span>
                  <div className="macros">
                    <span className="macro macro-p num">Б {prod.p}</span>
                    <span className="macro macro-f num">Ж {prod.f}</span>
                    <span className="macro macro-c num">У {prod.c}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Закрыть"
            >
              <IconClose size={18} />
            </button>

            <div className="modal-hero" data-cat={selected.category}>
              <ProductIllustration name={selected.illustration} category={selected.category} />
            </div>

            <div className="modal-body">
              <div className="modal-head">
                <div>
                  <span className="pill">{selected.category}</span>
                  <h2>{selected.name}</h2>
                </div>
                <button
                  type="button"
                  className={`basket-btn basket-btn-wide ${basket.includes(selected.id) ? 'in' : ''}`}
                  onClick={() => toggleBasket(selected.id)}
                >
                  {basket.includes(selected.id) ? <IconCheck size={16} /> : <IconPlus size={16} />}
                  <span>{basket.includes(selected.id) ? 'В рационе' : 'Добавить'}</span>
                </button>
              </div>

              <div className="nutrition-grid">
                <div className="nutri-item">
                  <span className="nutri-label">Калории</span>
                  <span className="nutri-value num">{selected.kcal}</span>
                  <span className="nutri-unit">ккал</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-label">Белки</span>
                  <span className="nutri-value num">{selected.p}</span>
                  <span className="nutri-unit">г</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-label">Жиры</span>
                  <span className="nutri-value num">{selected.f}</span>
                  <span className="nutri-unit">г</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-label">Углеводы</span>
                  <span className="nutri-value num">{selected.c}</span>
                  <span className="nutri-unit">г</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-label">Клетчатка</span>
                  <span className="nutri-value num">{selected.fiber}</span>
                  <span className="nutri-unit">г</span>
                </div>
              </div>

              <div className="highlights">
                <span className="highlights-label">Особенно богат</span>
                <div className="highlights-list">
                  {selected.highlights.map((h) => (
                    <span key={h} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </div>

              <p className="modal-note">
                Показатели указаны на 100 г продукта. Источник: USDA FoodData Central.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}