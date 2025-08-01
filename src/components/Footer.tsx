import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <strong>stegadgets.com</strong> — All
        rights reserved.
      </p>
    </footer>
  )
}

export default Footer
