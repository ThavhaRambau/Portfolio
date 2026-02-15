import '../styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true     // animate only once per element
    })
  }, [])

  return <Component {...pageProps} />
}

