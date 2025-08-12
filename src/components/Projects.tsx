import "./Projects.scss"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "LocalHarvest",
    subtitle: "Micro Produce Marketplace",
    description:
      "A full-stack mini marketplace where local growers can list fresh produce and neighbors can reserve them. Includes image uploads, quantity-aware reservations, and pickup tracking.",
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "💨 TailwindCSS v4",
      "🎞️ Framer Motion",
      "🔥 Firebase",
    ],
    link: "https://localharvest-eta.vercel.app/",
  },
  {
    title: "Lunaria",
    subtitle: "Mood & Music Journal",
    description:
      "A pastel-themed, single-page app to track your daily moods and songs. Includes animated mood cards, emoji filters, mood charts, and Firebase integration for user data and logs.",
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "🎞️ Framer Motion",
      "💨 TailwindCSS v4",
      "🔥 Firebase",
    ],
    link: "https://lunaria-frontend.vercel.app/",
  },
    {
    title: "Taskbento",
    subtitle: "Bento-Style Visual Task Manager",
    description:
      "A visual daily task manager inspired by bento layouts with claymorphic pastel tiles, drag-and-drop, and Firebase Firestore integration.",
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "🎞️ Framer Motion",
      "🔥 Firebase",
      "💠 Styled Components",
    ],
    link: "https://taskbento.vercel.app/",
  },
  {
    title: "Smart Expense Tracker",
    subtitle: "Budget Dashboard + Chart.js Visuals",
    description:
      "Responsive 3-column dashboard with expense tracking, filters, and Pie/Bar chart visualizations using Chart.js.",
    tech: ["⚛️ React", "📊 Chart.js", "📁 LocalStorage"],
    link: "https://smart-expense-tracker-khaki.vercel.app/",
  },
  {
    title: "Zenaura",
    subtitle: "Origami Pomodoro Timer",
    description:
      "A serene, origami-inspired Pomodoro timer app with motivational quotes, calming audio, and AssemblyAI transcription integration.",
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "🎞️ Framer Motion",
      "🔊 AssemblyAI",
      "🔥 Firebase",
    ],
    link: "https://zenaura-silk.vercel.app",
  },
  {
    title: "Taskbento",
    subtitle: "Bento-Style Visual Task Manager",
    description:
      "A visual daily task manager inspired by bento layouts with claymorphic pastel tiles, drag-and-drop, and Firebase Firestore integration.",
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "🎞️ Framer Motion",
      "🔥 Firebase",
      "💠 Styled Components",
    ],
    link: "https://taskbento.vercel.app/",
  },
  {
    title: "GlobeQuest",
    subtitle: "Country & Weather Explorer",
    description:
      "Search any country to view its flag, population, region, languages, currencies, borders, and live weather data for its capital city in a clean, premium dashboard UI.",
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "💨 TailwindCSS",
      "🌐 REST Countries API",
      "☁️ OpenWeather API",
    ],
    link: "https://globequest.vercel.app/",
  },
  {
    title: "CodeLore",
    subtitle: "Snippet Manager + Markdown Editor",
    description:
      "A beautifully designed syntax-highlighted code snippet manager with Markdown storytelling and Supabase backend.",
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "🖋️ Markdown",
      "🌈 PrismJS",
      "🛠️ Supabase",
    ],
    link: "https://code-lore-pi.vercel.app/",
  },
  {
    title: "Silent Auction Hub",
    subtitle: "Charity Bidding Platform",
    description:
      "A full-stack auction platform for local charities to host silent auctions with real-time bidding, image uploads, admin controls, and user authentication.",
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "💨 TailwindCSS v4",
      "🎞️ Framer Motion",
      "🛠️ Supabase",
    ],
    link: "https://silent-auction-hub.vercel.app/",
  },
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Creative Playground</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
