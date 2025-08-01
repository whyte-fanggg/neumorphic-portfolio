import "./TechPills.scss"

const techStack = [
  { name: "React", emoji: "⚛️", icon: "/tech/react.svg" },
  { name: "TypeScript", emoji: "🟦", icon: "/tech/typescript.svg" },
  { name: "Vite", emoji: "⚡", icon: "/tech/vite.svg" },
  { name: "Framer Motion", emoji: "🎞️", icon: "/tech/framer.svg" },
  { name: "TailwindCSS", emoji: "🌪️", icon: "/tech/tailwind.svg" },
  { name: "Firebase", emoji: "🔥", icon: "/tech/firebase.svg" },
  { name: "HTML5", emoji: "🧡", icon: "/tech/html5.svg" },
  { name: "CSS3", emoji: "🎨", icon: "/tech/css3.svg" },
  { name: "JavaScript", emoji: "💛", icon: "/tech/javascript.svg" },
  { name: "Node.js", emoji: "🟢", icon: "/tech/nodejs.svg" },
  { name: "MongoDB", emoji: "🌱", icon: "/tech/mongodb.svg" },
  { name: "Supabase", emoji: "🧬", icon: "/tech/supabase.svg" },
  { name: "Chart.js", emoji: "📊", icon: "/tech/chartjs.svg" },
  { name: "OpenAI API", emoji: "🧠", icon: "/tech/openai.svg" },
  { name: "EmailJS", emoji: "📧", icon: "/tech/emailjs.svg" },
  { name: "Quill.js", emoji: "📝", icon: "/tech/quill.svg" },
  { name: "jsPDF", emoji: "📄", icon: "/tech/jspdf.svg" },
  { name: "Context API", emoji: "🧩", icon: "/tech/context.svg" },
  { name: "Day.js", emoji: "📅", icon: "/tech/dayjs.svg" },
  { name: "LeafletJS", emoji: "🗺️", icon: "/tech/leaflet.svg" },
  { name: "Express.js", emoji: "🚆", icon: "/tech/express.svg" },
  { name: "Docker", emoji: "🐳", icon: "/tech/docker.svg" },
]

const TechPills = () => {
  return (
    <section className="tech-pills">
      <h3>Technologies I Work With</h3>
      <div className="pill-grid">
        {techStack.map(({ name, emoji, icon }) => (
          <div className="pill" key={name}>
            <img
              src={icon}
              alt={name}
              onError={(e) => {
                e.currentTarget.style.display = "none"
                const emojiSpan = document.createElement("span")
                emojiSpan.textContent = emoji
                emojiSpan.className = "emoji"
                e.currentTarget.parentElement?.prepend(emojiSpan)
              }}
            />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechPills
