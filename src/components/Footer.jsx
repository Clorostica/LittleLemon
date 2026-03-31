import { useLang } from '../context/LangContext'

const BASE = 'https://clorostica.github.io/LittleLemon2/img/'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="footer__main">
        {/* Brand */}
        <div className="footer__brand">
          <img src={BASE + 'logo.png'} alt="Little Lemon" />
          <p>{f.brand}</p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/>
                <circle cx="11.994" cy="11.979" r="3.003"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="footer__col-title">{f.nav.title}</h4>
          <nav className="footer__nav">
            {f.nav.links.map((l) => <a key={l} href="#">{l}</a>)}
          </nav>
        </div>

        {/* Hours */}
        <div>
          <h4 className="footer__col-title">{f.hours.title}</h4>
          <div className="footer__hours">
            {f.hours.rows.map((r) => (
              <div key={r.day} className="footer__hours-row">
                <span className="footer__hours-day">{r.day}</span>
                <span>{r.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer__newsletter">
          <h4 className="footer__col-title">{f.newsletter.title}</h4>
          <p>{f.newsletter.desc}</p>
          <form
            className="footer__form"
            action="https://formspree.io/f/mknkkrkj"
            method="POST"
          >
            <input
              type="email"
              name="_replyto"
              placeholder={f.newsletter.placeholder}
              className="footer__input"
              required
            />
            <button type="submit" className="footer__submit">
              {f.newsletter.submit}
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <span>{f.bottom.copy(new Date().getFullYear())}</span>
        <div className="footer__bottom-links">
          {f.bottom.links.map((l) => <a key={l} href="#">{l}</a>)}
        </div>
      </div>
    </footer>
  )
}
