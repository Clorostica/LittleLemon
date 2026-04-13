import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import LangSwitch from './LangSwitch'

const BASE = '/img/'

export default function Nav() {
  const { t } = useLang()
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [progress, setProgress]   = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <a href="#" className="nav__logo">
          <img src={BASE + 'logo.png'} alt="Little Lemon" />
        </a>

        <div className="nav__links">
          {t.nav.links.map((l) => (
            <a key={l} href="#" className="nav__link">{l}</a>
          ))}
        </div>

        <div className="nav__right">
          <LangSwitch />
          <a href="#reservations" className="nav__cta">{t.nav.cta}</a>
        </div>

        <button
          className={`nav__toggle${isOpen ? ' open' : ''}`}
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
        </button>
      </nav>

      <div className={`nav__drawer${isOpen ? ' open' : ''}`}>
        <div className="nav__drawer-backdrop" onClick={close} />
        <div className="nav__drawer-panel">
          {t.nav.links.map((l) => (
            <a key={l} href="#" className="nav__drawer-link" onClick={close}>{l}</a>
          ))}
          <div className="nav__drawer-lang">
            <LangSwitch dark />
          </div>
          <a href="#reservations" className="nav__drawer-cta" onClick={close}>
            {t.nav.cta}
          </a>
        </div>
      </div>
    </>
  )
}
