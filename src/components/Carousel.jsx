import { useState, useEffect, useCallback, useRef } from 'react'

export default function Carousel({ slides }) {
  const [index, setIndex]   = useState(0)
  const [hint, setHint]     = useState(true)   // show "drag" hint briefly
  const trackRef            = useRef(null)
  const drag                = useRef({ active: false, startX: 0, offset: 0, moved: false })
  const autoRef             = useRef(null)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length]
  )
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  // Auto-slide (pause while dragging)
  const startAuto = useCallback(() => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(next, 5000)
  }, [next])

  useEffect(() => {
    startAuto()
    return () => clearInterval(autoRef.current)
  }, [startAuto])

  // Hide drag hint after 2.5 s
  useEffect(() => {
    const id = setTimeout(() => setHint(false), 2500)
    return () => clearTimeout(id)
  }, [])

  // Sync track position whenever index changes (after drag release)
  useEffect(() => {
    if (!trackRef.current) return
    trackRef.current.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1)'
    trackRef.current.style.transform  = `translateX(-${index * 100}%)`
  }, [index])

  // ── Pointer drag ─────────────────────────────────────────
  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return
    clearInterval(autoRef.current)
    drag.current = { active: true, startX: e.clientX, offset: 0, moved: false }
    if (trackRef.current) {
      trackRef.current.style.transition = 'none'
    }
    setHint(false)
  }

  const onPointerMove = (e) => {
    if (!drag.current.active) return
    const offset = e.clientX - drag.current.startX
    drag.current.offset = offset
    drag.current.moved  = Math.abs(offset) > 6
    if (trackRef.current) {
      trackRef.current.style.transform =
        `translateX(calc(-${index * 100}% + ${offset}px))`
    }
  }

  const onPointerUp = () => {
    if (!drag.current.active) return
    drag.current.active = false
    const { offset } = drag.current

    if (offset < -60)      next()
    else if (offset > 60)  prev()
    else {
      // Snap back
      if (trackRef.current) {
        trackRef.current.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)'
        trackRef.current.style.transform  = `translateX(-${index * 100}%)`
      }
    }
    startAuto()
  }

  return (
    <section
      className="carousel-section"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      style={{ cursor: drag.current.active ? 'grabbing' : 'grab' }}
    >
      {/* Drag hint */}
      <div className={`carousel-hint${hint ? ' visible' : ''}`}>
        ← drag →
      </div>

      <div ref={trackRef} className="carousel-track">
        {slides.map((slide, i) => (
          <div key={i} className="carousel-slide">
            <img src={slide.img} alt={slide.title} draggable={false} />
            <div className="carousel-gradient" />
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <button className="btn btn--primary btn--sm">{slide.btn}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === index ? ' active' : ''}`}
            onClick={() => { setIndex(i); startAuto() }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn" onClick={() => { prev(); startAuto() }}>‹</button>
        <button className="carousel-btn" onClick={() => { next(); startAuto() }}>›</button>
      </div>
    </section>
  )
}
