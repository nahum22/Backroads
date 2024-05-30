import { socialLinks, footerLinks } from "../data";
function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} target="_blank" className="footer-icon">
              <i className={link.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright © Backroads travel tours company
        <span id="date" /> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
