import Terminal from './Terminal.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero wrap">
      <div className="hero__text">
        <p className="eyebrow mono">{profile.location}</p>
        <h1 className="hero__title">
          Interfaces en React que <em>se entienden solas.</em>
        </h1>
        <p className="hero__lead">
          Soy {profile.short}, desarrollador frontend. Construyo aplicaciones web completas, con el foco puesto en lo que ve y usa la persona del otro lado.
        </p>
        <div className="hero__cta">
          <a className="btn btn--solid" href="#proyectos">Ver proyectos</a>
          <a className="btn" href="#contacto">Contactarme</a>
        </div>
      </div>
      <Terminal />
    </section>
  )
}
