import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'

export default function Gate({ onEnter }) {
  const [leaving, setLeaving] = useState(false)

  const enter = () => {
    if (leaving) return
    setLeaving(true)
    setTimeout(onEnter, 550)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        enter()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <button className={`gate ${leaving ? 'gate--out' : ''}`} onClick={enter} aria-label="Entrar al portfolio">
      <span className="gate__grid" aria-hidden="true" />
      <span className="gate__inner">
        <span className="gate__prompt mono">~/portfolio $ ./entrar</span>
        <span className="gate__name">{profile.name}</span>
        <span className="gate__role mono">{profile.role}</span>
        <span className="gate__hint mono">
          click o <kbd>Enter</kbd> para entrar<span className="caret" />
        </span>
      </span>
    </button>
  )
}
