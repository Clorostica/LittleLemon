import { useRef, useState } from 'react'
import { useLang } from '../context/LangContext'

export default function LangSwitch({ dark = false }) {
  const { lang, setLang } = useLang()
  const isDE = lang === 'de'

  const trackRef = useRef(null)
  const drag = useRef({ active: false, startX: 0 })
  const [dragging, setDragging] = useState(false)

  const toggle = () => setLang(isDE ? 'en' : 'de')

  const onPointerDown = (e) => {
    e.preventDefault()
    drag.current = { active: true, startX: e.clientX }
    setDragging(true)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
  }

  const onPointerMove = (e) => {
    if (!drag.current.active) return
    drag.current.moved = Math.abs(e.clientX - drag.current.startX) > 4
  }

  const onPointerUp = (e) => {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    setDragging(false)

    if (!drag.current.active) return
    drag.current.active = false

    const delta = e.clientX - drag.current.startX

    if (drag.current.moved) {
      // Dragged right → DE, left → EN
      if (delta > 12) setLang('de')
      else if (delta < -12) setLang('en')
    } else {
      toggle()
    }
  }

  return (
    <div className={`lang-switch${dark ? ' lang-switch--dark' : ''}${dragging ? ' dragging' : ''}`}>
      <span
        className={`lang-switch__label${!isDE ? ' active' : ''}`}
        onClick={() => setLang('en')}
      >EN</span>

      <div ref={trackRef} className="lang-switch__track" onClick={toggle}>
        <div
          className="lang-switch__thumb"
          style={{ left: isDE ? 'calc(100% - 20px)' : '2px' }}
          onPointerDown={onPointerDown}
        />
      </div>

      <span
        className={`lang-switch__label${isDE ? ' active' : ''}`}
        onClick={() => setLang('de')}
      >DE</span>
    </div>
  )
}
