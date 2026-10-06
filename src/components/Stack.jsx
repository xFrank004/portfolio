import Section from './Section.jsx'
import { stack } from '../data/profile.js'

export default function Stack() {
  return (
    <Section id="stack" label="package.json" title="Con qué trabajo">
      <div className="stack">
        {stack.map((g) => (
          <div key={g.group} className="stack__group">
            <h3 className="stack__name mono">{g.group}</h3>
            <ul className="chips">
              {g.items.map((it) => (
                <li key={it} className="chip">{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
