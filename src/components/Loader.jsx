import '../loader.css'
import { useEffect, useState } from 'react'

export default function Loader({ visible }) {
  const [shouldRender, setShouldRender] = useState(visible)
  const [fadeClass, setFadeClass] = useState('fade-in')

  useEffect(() => {
    if (visible) {
      setShouldRender(true)
      setFadeClass('fade-in')
    } else {
      setFadeClass('fade-out')
      const timeout = setTimeout(() => setShouldRender(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [visible])

  if (!shouldRender) return null

  return (
    <div className={`overlay ${fadeClass}`}>
      <span className="loader --4"></span>
    </div>
  )
}
