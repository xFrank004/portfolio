export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section wrap">
      <div className="section__head">
        <p className="eyebrow mono">{label}</p>
        <h2 className="section__title">{title}</h2>
      </div>
      {children}
    </section>
  )
}
