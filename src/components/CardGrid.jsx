import useInView from '../hooks/useInView'

// 3-D tilt + specular shine on mouse move
function tiltOn(e) {
  const card = e.currentTarget
  const { left, top, width, height } = card.getBoundingClientRect()
  const x = (e.clientX - left) / width   // 0→1
  const y = (e.clientY - top)  / height  // 0→1
  const rotX = (0.5 - y) * 14
  const rotY = (x - 0.5) * 14
  card.style.transition = 'box-shadow 0.2s, transform 0s'
  card.style.transform  = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.02)`
  card.style.boxShadow  = '0 24px 60px rgba(0,0,0,0.18)'
  card.style.setProperty('--shine-x', `${x * 100}%`)
  card.style.setProperty('--shine-y', `${y * 100}%`)
}

function tiltOff(e) {
  const card = e.currentTarget
  card.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s'
  card.style.transform  = ''
  card.style.boxShadow  = ''
}

function Card({ card, delay }) {
  const [ref, inView] = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`card${inView ? ' card--visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseMove={tiltOn}
      onMouseLeave={tiltOff}
    >
      <div className="card__img-wrap">
        <img src={card.img} alt={card.alt || card.title} />
        {card.tag && <span className="card__tag">{card.tag}</span>}
      </div>
      <div className="card__body">
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text">{card.text}</p>
        {card.link && (
          <a href="#" className="card__link">
            {card.link} <span className="card__arrow">→</span>
          </a>
        )}
      </div>
    </div>
  )
}

function BentoCard({ card, featured }) {
  return (
    <div className={`bento-card${featured ? ' bento-card--featured' : ''}`}>
      <img src={card.img} alt={card.alt || card.title} />
      <div className="bento-overlay" />
      <div className="bento-body">
        {card.tag && <span className="bento-tag">{card.tag}</span>}
        <h3 className="bento-title">{card.title}</h3>
        <p className="bento-text">{card.text}</p>
        <button className="btn btn--primary btn--sm">{card.btn}</button>
      </div>
    </div>
  )
}

export default function CardGrid({ cards, label, title, desc, variant = 'cards' }) {
  const [headerRef, headerVisible] = useInView(0.2)

  if (variant === 'bento') {
    return (
      <div className="bento-section">
        {(label || title) && (
          <div
            ref={headerRef}
            className={`bento-header fade-slide${headerVisible ? ' visible' : ''}`}
          >
            {label && <span className="section__label">{label}</span>}
            {title && <h2 className="section__title">{title}</h2>}
          </div>
        )}
        <div className="bento-grid">
          {cards.map((card, i) => (
            <BentoCard key={card.title} card={card} featured={i === 0} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      {(label || title || desc) && (
        <div
          ref={headerRef}
          className={`section__header fade-slide${headerVisible ? ' visible' : ''}`}
        >
          {label && <span className="section__label">{label}</span>}
          {title && <h2 className="section__title">{title}</h2>}
          {desc  && <p className="section__desc">{desc}</p>}
        </div>
      )}
      <div className="cards-grid">
        {cards.map((card, i) => (
          <Card key={card.title} card={card} delay={i * 120} />
        ))}
      </div>
    </div>
  )
}
