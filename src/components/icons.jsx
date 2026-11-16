// Тонкие 1.5px stroke-иконки (как Lucide), но без установки пакета.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export function IconLeaf({ size = 22, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  )
}

export function IconBook({ size = 20, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

export function IconCalendar({ size = 20, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export function IconChart({ size = 20, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M3 3v18h18" />
      <path d="M18 17V9M13 17V5M8 17v-3" />
    </svg>
  )
}

export function IconArrowRight({ size = 18, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconPlus({ size = 16, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconFlame({ size = 18, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.5-1-2.5-1.5-3.5-.5 1-1 1.5-2 2-1-1-1.5-2.5-1.5-4.5C8.5 6 10 4 12 2c.5 2.5 2 4.5 3.5 6 1.5 1.5 2.5 3.5 2.5 5.5a6 6 0 0 1-12 0c0-1 .5-2 1.5-3Z" />
    </svg>
  )
}

export function IconSparkles({ size = 18, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5Z" />
      <path d="M5 17l-.7 2.1L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.9Z" />
    </svg>
  )
}