import { useState } from 'react'
import Section from './Section.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      const el = document.getElementById('contact-email')
      const range = document.createRange()
      range.selectNodeContents(el)
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  return (
    <Section id="contacto" label="contacto" title="Hablemos">
      <div className="contact">
        <p className="contact__lead">
          Estoy buscando mi próximo equipo remoto. Si tenés un puesto o un proyecto en el que pueda sumar, escribime.
        </p>
        <div className="contact__mail">
          <a id="contact-email" href={`mailto:${profile.email}`} className="contact__email">
            {profile.email}
          </a>
          <button type="button" className="btn btn--small" onClick={copy}>
            {copied ? 'Copiado' : 'Copiar mail'}
          </button>
        </div>
        <ul className="contact__links">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="link mono">
              GitHub · {profile.githubUser} ↗
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link mono">
              LinkedIn ↗
            </a>
          </li>
        </ul>
      </div>
    </Section>
  )
}
