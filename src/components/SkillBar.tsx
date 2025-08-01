import './SkillBar.scss'

const SkillBar = ({ title, level }: { title: string; level: number }) => {
  return (
    <div className="skill-bar">
      <div className="label">
        <span>{title}</span>
        <span>{level}%</span>
      </div>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

export default SkillBar
