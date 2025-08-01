import "./About.scss"
import SkillBar from "./SkillBar"
import SkillDial from "./SkillDial"
import TechPills from "./TechPills"
import QuoteBlock from "./QuoteBlock"
import ValueCards from "./ValueCards"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>

        <p>
          I’m Stephen, a UI-focused web developer with over 10 years of
          experience building stunning, accessible, and highly functional
          digital experiences. I specialize in scalable component systems,
          performance-optimized frontend architecture, and beautiful modern UI.
        </p>

        <ValueCards />

        {/* Horizontal Skill Bars */}
        <div className="skill-bars">
          <SkillBar title="UI/UX Design" level={95} />
          <SkillBar title="Accessibility" level={90} />
          <SkillBar title="Component Architecture" level={90} />
          <SkillBar title="Responsive Design" level={95} />
          <SkillBar title="State Management" level={85} />
        </div>

        {/* Circular Skill Dials */}
        <div className="skill-dials">
          <SkillDial title="React" percent={95} />
          <SkillDial title="TypeScript" percent={90} />
          <SkillDial title="SCSS" percent={90} />
          <SkillDial title="Vite" percent={85} />
          <SkillDial title="Git" percent={95} />
        </div>
        <TechPills />
        <QuoteBlock />
      </div>
    </section>
  )
}

export default About
