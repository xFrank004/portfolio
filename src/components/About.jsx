import Section from './Section.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <Section id="sobre-mi" label="sobre-mi.md" title="Diseño primero, código después">
      <div className="about">
        <div className="about__bio">
          {profile.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="about__facts">
          {profile.facts.map(([k, v]) => (
            <div key={k} className="fact">
              <dt className="mono">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
