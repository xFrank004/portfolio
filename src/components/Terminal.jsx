import { useEffect, useState } from 'react'

const script = [
  { cmd: 'whoami', out: ['franco rodriguez pouso — frontend developer'] },
  { cmd: 'cat stack.txt', out: ['react · javascript · tailwind · vite', 'python · fastapi · postgresql'] },
  { cmd: 'ls proyectos/', out: ['tamgo-truck/  prompter/  appgym/'] },
  { cmd: 'echo $STATUS', out: ['disponible para trabajo remoto ✓'] },
]

const full = script.flatMap((s) => [{ type: 'cmd', text: s.cmd }, ...s.out.map((t) => ({ type: 'out', text: t }))])

export default function Terminal() {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [lines, setLines] = useState(reduced ? full : [])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    if (reduced) return
    let cancelled = false
    const wait = (ms) => new Promise((r) => setTimeout(r, ms))
    const run = async () => {
      await wait(400)
      for (const step of script) {
        for (let i = 1; i <= step.cmd.length; i++) {
          if (cancelled) return
          setTyping(step.cmd.slice(0, i))
          await wait(55)
        }
        await wait(250)
        if (cancelled) return
        setTyping('')
        setLines((l) => [...l, { type: 'cmd', text: step.cmd }])
        for (const o of step.out) {
          await wait(120)
          if (cancelled) return
          setLines((l) => [...l, { type: 'out', text: o }])
        }
        await wait(500)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [reduced])

  return (
    <div className="term" role="img" aria-label="Terminal con un resumen del perfil: frontend developer, stack React y Python, disponible para trabajo remoto">
      <div className="term__bar">
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__title mono">fran@dev: ~</span>
      </div>
      <div className="term__body mono">
        {lines.map((l, i) =>
          l.type === 'cmd' ? (
            <div key={i}>
              <span className="term__ps">$</span> {l.text}
            </div>
          ) : (
            <div key={i} className="term__out">
              {l.text}
            </div>
          ),
        )}
        <div>
          <span className="term__ps">$</span> {typing}
          <span className="caret" />
        </div>
      </div>
    </div>
  )
}
