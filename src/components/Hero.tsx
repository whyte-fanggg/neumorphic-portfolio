import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Crafting seamless digital experiences<br />
          that inspire and perform.
        </h1>
        <p>With 10+ years building modern web solutions, I bring ideas to life through intuitive UI.</p>
        <a href="#projects" className="cta">View Projects</a>
      </div>

      <div className="hero-shape">
        <div className="loader-inner">
          <div className="loader-logo">
            <img className="logo-img" src="/logo.png" alt="Logo" />
          </div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </section>
  )
}
