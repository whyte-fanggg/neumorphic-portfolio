import "./SkillDial.scss"

const SkillDial = ({ title, percent }: { title: string; percent: number }) => {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="skill-dial">
      <svg width="100" height="100">
        <circle
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="10"
          stroke="#1a1a1a"
          fill="none"
        />
        <circle
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="10"
          stroke="#6df"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="label">
        <span className="percent">{percent}%</span>
        <span className="title">{title}</span>
      </div>
    </div>
  )
}

export default SkillDial
