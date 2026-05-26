import '../styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Analytics } from '@vercel/analytics/react'       // ✅ Analytics
import { SpeedInsights } from '@vercel/speed-insights/next' // ✅ Speed Insights

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true     // animate only once per element
    })
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />       {/* Tracks visitors */}
      <SpeedInsights />   {/* Tracks performance metrics */}
    </>
  )
}