import { useRef, useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'

const BASE = '/img/'

// Parse "200+" → { end:200, suffix:'+', dec:0 }  |  "4.9★" → { end:4.9, suffix:'★', dec:1 }
function parseStat(str) {
  const m = str.match(/^([\d.]+)(.*)$/)
  if (!m) return { end: 0, suffix: str, dec: 0 }
  const dec = m[1].includes('.') ? m[1].split('.')[1].length : 0
  return { end: parseFloat(m[1]), suffix: m[2], dec }
}

function StatCounter({ stat }) {
  const { end, suffix, dec } = parseStat(stat.number)
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 1600
        const step = end / (duration / 16)
        let cur = 0
        const id = setInterval(() => {
          cur += step
          if (cur >= end) { setCount(end); clearInterval(id) }
          else setCount(cur)
        }, 16)
      },
      { threshold: 0.6 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="hero__stat">
      <span className="hero__stat-number">
        {count.toFixed(dec)}{suffix}
      </span>
      <span className="hero__stat-label">{stat.label}</span>
    </div>
  )
}

export default function PromoSection() {
  const { t } = useLang()
  const h = t.hero
  const heroRef = useRef(null)
  const imgRef  = useRef(null)

  // Mouse parallax on hero image
  const onMouseMove = (e) => {
    if (!heroRef.current || !imgRef.current) return
    const { left, top, width, height } = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width  - 0.5) * 28
    const y = ((e.clientY - top)  / height - 0.5) * 18
    imgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.1)`
  }

  const onMouseLeave = () => {
    if (imgRef.current)
      imgRef.current.style.transform = 'translate(0,0) scale(1.1)'
  }

  return (
    <section
      className="hero"
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="hero__media">
        <img ref={imgRef} src={BASE + 'promo.jpg'} alt="Little Lemon" />
        <div className="hero__overlay" />
      </div>

      <div className="hero__body">
        <span className="hero__badge">{h.badge}</span>

        <h1 className="hero__title">
          {h.title}<br />
          <em>{h.titleEm}</em>
        </h1>

        <p className="hero__desc">{h.desc}</p>

        <div className="hero__actions">
          <a href="#reservations" className="btn btn--primary">{h.cta1}</a>
          <a href="#menu" className="btn btn--outline">{h.cta2}</a>
        </div>

        <div className="hero__stats">
          {h.stats.map((s, i) => (
            <>
              <StatCounter key={s.label} stat={s} />
              {i < h.stats.length - 1 && <div className="hero__stat-divider" />}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
