const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const MEALS = ['Завтрак', 'Обед', 'Ужин']

export default function Planner() {
  return (
    <>
      <div className="section-head">
        <div>
          <h2>Конструктор рациона</h2>
          <p>Собери рацион на неделю — пока в разработке, но каркас уже готов.</p>
        </div>
      </div>

      <div className="week-grid">
        {DAYS.map((day) => (
          <div key={day} className="day-col">
            <div className="day-name">{day}</div>
            {MEALS.map((meal) => (
              <div key={meal} className="slot">
                <span className="slot-label">{meal}</span>
                <span>+</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}