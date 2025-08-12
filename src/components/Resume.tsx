import { useEffect, useRef } from "react"
import "./Resume.scss"

type Item = {
  id: string
  side: "left" | "right"
  title: string
  period: string
  blurb: string
}

// Slow (outer) items — RESUME (chronological, auto‑alternate sides)
const SLOW_BASE: Omit<Item, "side" | "id">[] = [
  // 2015–2017
  {
    title: "Post‑Grad, Software Engineering — GVP, India",
    period: "Aug 2015 – Dec 2017",
    blurb:
      "Foundations in software engineering, data structures, DBMS, OS. Project work in JS & Java.",
  }, //
  // 2017–2020
  {
    title: "Web Designer — Mirus Systems Ltd. (India)",
    period: "Dec 2017 – Nov 2020",
    blurb:
      "Vue/Nuxt SSR, perf +37%, SEO +51%, Storybook UI kit, accessibility (WCAG 2.1 AA), cross‑browser fixes.",
  }, //
  // 2020–2021
  {
    title: "Computer Applications Development — Conestoga, Canada",
    period: "Sep 2020 – Apr 2021",
    blurb: "CAD diploma: backend logic, PHP/MySQL, MVC fundamentals.",
  }, //
  // 2021–2022
  {
    title: "Information Systems Security — Georgian, Canada",
    period: "Sep 2021 – Aug 2022",
    blurb: "Security tooling, DevSecOps mindset, secure coding practices.",
  }, //
  // 2022
  {
    title: "Network Support Analyst — HGR Graham Partners LLP. (Co‑op)",
    period: "May 2022 – Aug 2022",
    blurb:
      "Downtime ‑37%, firewall & access controls, infra migration saving $17.5k/yr.",
  }, //
  // 2024–Present
  {
    title: "Junior Technologist — St. Clair College",
    period: "Jan 2024 – Present",
    blurb:
      "Programming/Linux labs, Git/Docker; PHP+MySQL labs; docs that cut prep time 25%.",
  }, //
  // Certifications (cluster as a single node)
  {
    title: "Certifications",
    period: "Selected",
    blurb:
      "AWS DVA • CS50 Web • React Complete Guide 2025 • MERN Essentials • Succeeding in Web Dev.",
  }, //
]

// assign alternating sides and ids
const SLOW_ITEMS: Item[] = SLOW_BASE.map((it, i) => ({
  id: `S${i + 1}`,
  side: i % 2 === 0 ? "left" : "right",
  ...it,
}))
const SLOW_LOOP: Item[] = [
  ...SLOW_ITEMS,
  ...SLOW_ITEMS.map((i) => ({ ...i, id: `${i.id}-dup` })),
]

// Fast (inner) items — convex
// Fast (inner) items — ALL PROJECTS (auto‑alternate sides)
const FAST_BASE: Omit<Item, "side" | "id">[] = [
  {
    title: "LocalHarvest",
    period: "React + TS + Firebase",
    blurb:
      "Micro‑marketplace: auth, listings, Firebase Storage; clean responsive UI with motion.",
  },
  {
    title: "Zenaura",
    period: "React + TS + Firebase",
    blurb:
      "Origami‑inspired Pomodoro; smooth transitions; AssemblyAI transcription pipeline.",
  },
  {
    title: "CodeLore",
    period: "React + TS + Supabase",
    blurb:
      "Snippet manager with Markdown storytelling; PrismJS; Supabase auth/DB.",
  },
  {
    title: "Smart Expense Tracker",
    period: "React + Chart.js",
    blurb:
      "3‑column dashboard; add/filter; charts; planned: Firebase auth + inline edit.",
  },
  {
    title: "Taskbento",
    period: "React + TS + Firebase",
    blurb: "Bento‑style daily planner; drag‑and‑drop; Firestore realtime sync.",
  },
  {
    title: "GlobeQuest",
    period: "React + APIs",
    blurb:
      "Country + weather explorer using REST Countries & OpenWeather APIs.",
  },
  {
    title: "Silent Auction Hub",
    period: "React + TS + Supabase",
    blurb:
      "Charity auctions: auth, items, bidding; Vercel deploy; realtime optional.",
  },
  {
    title: "Neumorphic Portfolio",
    period: "React + TS + SCSS",
    blurb:
      "This site: dark neumorphism, tokens, animated sections, resume timeline.",
  },
  {
    title: "UI‑Library",
    period: "React + TS + SCSS",
    blurb:
      "Reusable components (buttons, badges, navbars); demos & code previews.",
  },
  {
    title: "Lunaria",
    period: "React + Firebase",
    blurb:
      "Mood journal: emoji inputs, modal help, stats plan; Firebase backend.",
  },
  {
    title: "Interactive Devverse",
    period: "React + TS + Framer",
    blurb:
      "3D/futuristic landing: orbiting tech, gradient hero, parallax, neon cards.",
  },
  {
    title: "Neural Dev Mind",
    period: "React + R3F + FX",
    blurb:
      "Procedural neural cloud, glowing lines, interactive nodes, camera fly‑to.",
  },
  {
    title: "Snipvault",
    period: "React + TS + Firebase",
    blurb: "Minimal code‑snippet CMS; PrismJS; Metro Blocks theme.",
  }
]

// assign alternating sides and ids
const FAST_ITEMS: Item[] = FAST_BASE.map((it, i) => ({
  id: `P${i + 1}`,
  side: i % 2 === 0 ? "right" : "left",
  ...it,
}))
const FAST_LOOP: Item[] = [
  ...FAST_ITEMS,
  ...FAST_ITEMS.map((i) => ({ ...i, id: `${i.id}-dup` })),
]

const Resume = () => {
  const canvasRef = useRef<HTMLDivElement>(null)

  // Compute pixel vars for connector math so slow cards hit the spine exactly
  useEffect(() => {
    const el = canvasRef.current
    if (!el) return

    const compute = () => {
      const styles = getComputedStyle(el)
      const fastW = styles.getPropertyValue("--fast-w").trim() // e.g. "20%"
      const pct = Number(fastW.replace("%", "")) / 100
      const gap = parseFloat(styles.getPropertyValue("--gap"))
      const connector = parseFloat(styles.getPropertyValue("--connector"))
      const fastPx = el.clientWidth * pct

      el.style.setProperty("--fast-w-px", `${fastPx}px`)
      el.style.setProperty("--gap-px", `${gap}px`)
      el.style.setProperty("--connector-px", `${connector}px`)
    }

    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section id="resume" className="resume">
      <h2 className="resume__title">Resume</h2>

      <div
        ref={canvasRef}
        className="resume__canvas"
        role="region"
        aria-label="Resume timeline"
      >
        {/* Slow engraved track (outer) */}
        <div className="resume__track resume__track--slow">
          {SLOW_LOOP.map((item) => (
            <article
              key={item.id}
              className={`resume__entry resume__entry--slow resume__entry--${item.side}`}
            >
              <header className="resume__entry-head">
                <h3 className="resume__entry-title">{item.title}</h3>
                <span className="resume__entry-period">{item.period}</span>
              </header>
              <p className="resume__entry-blurb">{item.blurb}</p>
            </article>
          ))}
        </div>

        {/* Fast convex track (inner, near spine) */}
        <div className="resume__track resume__track--fast">
          {FAST_LOOP.map((item) => (
            <article
              key={item.id}
              className={`resume__entry resume__entry--fast resume__entry--convex resume__entry--${item.side}`}
            >
              <header className="resume__entry-head">
                <h3 className="resume__entry-title">{item.title}</h3>
                <span className="resume__entry-period">{item.period}</span>
              </header>
              <p className="resume__entry-blurb">{item.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume
