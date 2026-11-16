// Стилизованные иллюстрации продуктов.
// Тёплая палитра

const SVG_PROPS = {
  viewBox: '0 0 120 120',
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  'aria-hidden': true,
}

export function Avocado() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M60 14c-16 0-30 22-30 46 0 24 13 42 30 42s30-18 30-42c0-24-14-46-30-46z" fill="#7a9679" />
      <path d="M60 22c-12 0-24 18-24 40 0 19 10 34 24 34s24-15 24-34c0-22-12-40-24-40z" fill="#c9d5b5" />
      <path d="M60 28c-9 0-18 15-18 34 0 15 8 26 18 26s18-11 18-26c0-19-9-34-18-34z" fill="#dde5c8" />
      <ellipse cx="60" cy="74" rx="13" ry="15" fill="#6b4a2b" />
      <ellipse cx="57" cy="70" rx="3" ry="4" fill="#8b7355" opacity="0.6" />
      <path d="M60 16q0-8-7-10" stroke="#5b7455" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Salmon() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M20 70 Q30 40 55 35 Q85 32 100 55 Q105 75 85 88 Q60 98 35 90 Q22 82 20 70 Z" fill="#e89a7a" />
      <path d="M28 68 Q36 50 55 46 Q78 43 90 60" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M32 72 Q40 55 58 52" stroke="#fff" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M40 80 Q50 72 62 72" stroke="#fff" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="88" cy="58" r="2" fill="#fff" opacity="0.8" />
    </svg>
  )
}

export function Yogurt() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="102" rx="32" ry="5" fill="#141715" opacity="0.06" />
      <path d="M32 40 L88 40 L84 96 Q84 102 78 102 L42 102 Q36 102 36 96 Z" fill="#f3efe6" />
      <ellipse cx="60" cy="40" rx="28" ry="6" fill="#fff" />
      <ellipse cx="60" cy="40" rx="22" ry="4" fill="#eef2ec" />
      <circle cx="55" cy="36" r="3" fill="#5b7455" />
      <circle cx="63" cy="34" r="2.5" fill="#5b7455" />
      <circle cx="60" cy="38" r="2" fill="#d97757" />
    </svg>
  )
}

export function GrainBowl() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="104" rx="34" ry="4" fill="#141715" opacity="0.06" />
      <path d="M22 58 Q22 96 60 96 Q98 96 98 58 Z" fill="#e5d9bf" />
      <path d="M22 58 Q22 54 26 54 L94 54 Q98 54 98 58" fill="#d1c4a8" />
      <circle cx="40" cy="52" r="2.5" fill="#fff" opacity="0.9" />
      <circle cx="52" cy="48" r="2.5" fill="#fff" opacity="0.9" />
      <circle cx="65" cy="50" r="2.5" fill="#fff" opacity="0.9" />
      <circle cx="78" cy="52" r="2.5" fill="#fff" opacity="0.9" />
      <circle cx="46" cy="58" r="2" fill="#d97757" opacity="0.8" />
      <circle cx="72" cy="58" r="2" fill="#d97757" opacity="0.8" />
    </svg>
  )
}

export function Blueberry() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="60" r="18" fill="#4a5d8a" />
      <circle cx="72" cy="60" r="18" fill="#5a6e9d" />
      <circle cx="60" cy="42" r="18" fill="#5a6e9d" />
      <circle cx="60" cy="78" r="16" fill="#3e4f78" />
      <circle cx="43" cy="55" r="4" fill="#fff" opacity="0.35" />
      <circle cx="67" cy="55" r="4" fill="#fff" opacity="0.35" />
      <circle cx="55" cy="37" r="4" fill="#fff" opacity="0.35" />
      <path d="M48 44l2 3M60 26l-2 3M72 44l-2 3" stroke="#3e4f78" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function LeafyGreens() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M60 100 Q55 70 38 40 Q48 32 60 42 Q58 65 60 100 Z" fill="#5b7455" />
      <path d="M60 100 Q65 70 82 40 Q72 32 60 42 Q62 65 60 100 Z" fill="#7a9679" />
      <path d="M60 100 Q60 60 60 30 Q72 28 82 40 Q72 70 60 100 Z" fill="#8ba377" />
      <path d="M60 100 Q60 60 58 28 Q46 28 38 40 Q48 70 60 100 Z" fill="#5b7455" opacity="0.7" />
      <path d="M60 100 L60 30" stroke="#3a5a40" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function Chicken() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="106" rx="28" ry="4" fill="#141715" opacity="0.06" />
      <path d="M40 30 Q80 25 88 55 Q92 80 70 88 Q50 94 40 78 Q32 60 40 30 Z" fill="#e8c9a0" />
      <path d="M46 40 Q78 35 82 58" stroke="#d1a878" strokeWidth="1.5" fill="none" />
      <path d="M44 55 Q70 50 76 68" stroke="#d1a878" strokeWidth="1.5" fill="none" />
      <path d="M46 70 Q64 64 70 78" stroke="#d1a878" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function Egg() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="104" rx="26" ry="4" fill="#141715" opacity="0.06" />
      <ellipse cx="60" cy="62" rx="30" ry="40" fill="#f3efe6" />
      <ellipse cx="52" cy="48" rx="8" ry="12" fill="#fff" opacity="0.7" />
      <path d="M40 50l4 4-3 4 5 3" stroke="#d1c4a8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Apple() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="106" rx="24" ry="4" fill="#141715" opacity="0.06" />
      <path d="M40 45 Q30 50 30 70 Q30 92 52 98 Q60 100 68 98 Q90 92 90 70 Q90 50 80 45 Q70 42 60 50 Q50 42 40 45 Z" fill="#d97757" />
      <path d="M60 50 Q62 30 60 22" stroke="#5b7455" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 28 Q72 24 76 32 Q68 38 60 34 Z" fill="#5b7455" />
      <ellipse cx="46" cy="66" rx="5" ry="8" fill="#fff" opacity="0.3" />
    </svg>
  )
}

export function Broccoli() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="106" rx="24" ry="4" fill="#141715" opacity="0.06" />
      <path d="M52 100 Q50 80 55 65 L65 65 Q70 80 68 100 Z" fill="#a3b18a" />
      <circle cx="42" cy="55" r="14" fill="#5b7455" />
      <circle cx="60" cy="48" r="16" fill="#7a9679" />
      <circle cx="78" cy="55" r="14" fill="#5b7455" />
      <circle cx="52" cy="60" r="12" fill="#6b8568" />
      <circle cx="68" cy="60" r="12" fill="#6b8568" />
    </svg>
  )
}

export function Milk() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="106" rx="22" ry="4" fill="#141715" opacity="0.06" />
      <path d="M42 30 L78 30 L82 50 L82 96 Q82 100 78 100 L42 100 Q38 100 38 96 L38 50 Z" fill="#fff" />
      <path d="M42 30 L78 30 L74 22 Q74 18 70 18 L50 18 Q46 18 46 22 Z" fill="#eef2ec" />
      <rect x="46" y="55" width="28" height="22" rx="4" fill="#eef2ec" />
      <path d="M52 62 Q60 58 68 62" stroke="#5b7455" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M52 68 Q60 64 68 68" stroke="#5b7455" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Banana() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M38 30 Q70 25 88 45 Q102 68 95 90 Q88 100 78 95 Q65 85 55 65 Q45 45 32 42 Z" fill="#f0d67a" />
      <path d="M42 35 Q68 30 82 48 Q94 66 90 84" stroke="#d1b246" strokeWidth="1.5" fill="none" />
      <path d="M36 40 Q34 32 40 28" stroke="#5b5b3a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Cheese() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="102" rx="32" ry="4" fill="#141715" opacity="0.06" />
      <path d="M20 65 L60 45 L100 65 L100 85 L60 100 L20 85 Z" fill="#f5d878" />
      <path d="M20 65 L60 45 L100 65 L60 78 Z" fill="#fae6a4" />
      <circle cx="45" cy="72" r="4" fill="#e0b84a" />
      <circle cx="70" cy="80" r="3" fill="#e0b84a" />
      <circle cx="60" cy="68" r="3" fill="#e0b84a" />
    </svg>
  )
}

export function Almond() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="42" cy="60" rx="14" ry="22" fill="#c9a67a" transform="rotate(-20 42 60)" />
      <ellipse cx="72" cy="55" rx="14" ry="22" fill="#b8956a" transform="rotate(15 72 55)" />
      <ellipse cx="55" cy="82" rx="14" ry="22" fill="#d4b088" transform="rotate(-10 55 82)" />
      <ellipse cx="38" cy="55" rx="3" ry="5" fill="#fff" opacity="0.3" />
    </svg>
  )
}

export function Tomato() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="106" rx="26" ry="4" fill="#141715" opacity="0.06" />
      <circle cx="60" cy="65" r="30" fill="#d96455" />
      <path d="M60 42 Q58 32 60 26" stroke="#5b7455" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 42 L50 38 L55 46 Z M60 42 L70 38 L65 46 Z M60 42 L60 32 Z" fill="#5b7455" />
      <ellipse cx="48" cy="58" rx="6" ry="8" fill="#fff" opacity="0.2" />
    </svg>
  )
}

export function Cucumber() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="104" rx="28" ry="4" fill="#141715" opacity="0.06" />
      <rect x="30" y="45" width="60" height="30" rx="15" fill="#5b7455" transform="rotate(-15 60 60)" />
      <rect x="34" y="48" width="52" height="24" rx="12" fill="#7a9679" transform="rotate(-15 60 60)" />
      {[[45,55],[55,58],[65,60],[75,62],[50,62],[70,68]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#a3b18a" opacity="0.8" />
      ))}
    </svg>
  )
}

export function Orange() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="60" cy="106" rx="26" ry="4" fill="#141715" opacity="0.06" />
      <circle cx="60" cy="65" r="30" fill="#e89a3d" />
      {[[45,55],[60,50],[75,55],[50,75],[70,75],[55,68],[68,65]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#c97a1e" opacity="0.5" />
      ))}
      <path d="M60 38 Q58 30 62 26" stroke="#5b7455" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M60 34 Q68 30 74 36 Q68 42 60 38 Z" fill="#5b7455" />
    </svg>
  )
}

// Реестр: имя  компонент
const REGISTRY = {
  avocado: Avocado,
  salmon: Salmon,
  yogurt: Yogurt,
  grain: GrainBowl,
  blueberry: Blueberry,
  greens: LeafyGreens,
  chicken: Chicken,
  egg: Egg,
  apple: Apple,
  broccoli: Broccoli,
  milk: Milk,
  banana: Banana,
  cheese: Cheese,
  almond: Almond,
  tomato: Tomato,
  cucumber: Cucumber,
  orange: Orange,
}

// фолбек по категории, если конкретной иллюстрации нет
const CATEGORY_FALLBACK = {
  'Овощи': LeafyGreens,
  'Фрукты': Apple,
  'Ягоды': Blueberry,
  'Белки': Egg,
  'Зерновые': GrainBowl,
  'Молочное': Yogurt,
  'Орехи': Almond,
}

export function ProductIllustration({ name, category }) {
  const Component = REGISTRY[name] || CATEGORY_FALLBACK[category] || LeafyGreens
  return <Component />
}