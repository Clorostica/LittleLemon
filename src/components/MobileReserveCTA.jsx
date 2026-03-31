import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'

export default function MobileReserveCTA() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`mobile-reserve${visible ? ' mobile-reserve--visible' : ''}`}>
      <div className="mobile-reserve__inner">
        <div className="mobile-reserve__text">
          <span className="mobile-reserve__label">🍋 Little Lemon</span>
          <span className="mobile-reserve__sub">{t.hero.stats[0].number} {t.hero.stats[0].label}</span>
        </div>
        <a href="#reservations" className="mobile-reserve__btn">
          {t.nav.cta}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
