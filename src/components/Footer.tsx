import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <strong>stegadgets.com</strong> — All
        rights reserved.
      </p>
      <p className="alt-link">
        Prefer the light theme? Try the{" "}
        <a
          href="https://portfolio-sand-mu-43.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          alternate version
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
