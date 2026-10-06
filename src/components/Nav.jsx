const links = [
  ['#sobre-mi', 'Sobre mí'],
  ['#stack', 'Stack'],
  ['#proyectos', 'Proyectos'],
  ['#contacto', 'Contacto'],
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a href="#inicio" className="nav__brand mono">
          fran<span className="accent">@</span>dev
        </a>
        <nav aria-label="Secciones">
          <ul className="nav__links">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
