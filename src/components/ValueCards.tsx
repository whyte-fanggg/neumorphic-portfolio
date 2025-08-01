import "./ValueCards.scss"

const values = [
  {
    title: "Precision",
    desc: "Clean code, scalable structure, and pixel-perfect UI delivery.",
  },
  {
    title: "Creativity",
    desc: "Modern design systems fused with UX thinking and animations.",
  },
  {
    title: "Performance",
    desc: "Fast load times, optimized assets, and snappy transitions.",
  },
  {
    title: "Accessibility",
    desc: "Inclusive, WCAG-friendly, keyboard navigable experiences.",
  },
]

const ValueCards = () => {
  return (
    <section className="value-cards">
      <h3>What I Bring to the Table</h3>
      <div className="card-grid">
        {values.map(({ title, desc }) => (
          <div className="value-card" key={title}>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValueCards
