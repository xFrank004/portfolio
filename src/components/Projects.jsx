import Section from './Section.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <Section id="proyectos" label="~/proyectos" title="Proyectos">
      <div className="projects">
        {projects.map((p, i) => (
          <article key={p.id} className={`project ${i === 0 ? 'project--lead' : ''}`}>
            <div className="project__top">
              <p className="project__kind mono">{p.kind}</p>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__summary">{p.summary}</p>
            </div>
            <ul className="project__points">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="project__foot">
              <ul className="chips chips--sm">
                {p.tags.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
              <div className="project__links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link mono">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
