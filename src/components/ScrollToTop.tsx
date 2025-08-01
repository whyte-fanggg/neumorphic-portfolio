import { useEffect, useState } from "react"
import "./ScrollToTop.scss"

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    console.log("✅ ScrollToTop component mounted")

    document.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop
      console.log("🔥 Scroll Position:", scrollTop)

      if (scrollTop > 100) setVisible(true)
      else setVisible(false)
    })
  }, [])

  return (
    <button
      className="scroll-to-top"
      style={{ display: visible ? "block" : "none" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="arrow">⬆</span>
    </button>
  )
}

export default ScrollToTop
