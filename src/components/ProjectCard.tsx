import "./ProjectCard.scss"

type Props = {
  title: string
  subtitle: string
  description: string
  tech: string[]
  link: string
}

const ProjectCard = ({ title, subtitle, description, tech, link }: Props) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3>{title}</h3>
        <h4 className="subtitle">{subtitle}</h4>
        <p className="description">{description}</p>
      </div>

      <div className="tags">
        {tech.map((item) => (
          <span className="pill" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="card-footer">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="view-btn"
        >
          🔗 View Project
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
