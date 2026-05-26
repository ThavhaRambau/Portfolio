import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Thavha Rambau | Portfolio</title>
        <meta name="description" content="Portfolio of Thavha Rambau, showcasing skills in web development, cloud infrastructure, and AI deployment." />
        <meta name="keywords" content="Thavha Rambau, Web Developer, Portfolio, React, Next.js, Tailwind, Cloud, AI" />
        <meta name="author" content="Thavha Rambau" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Thavha Rambau | Portfolio" />
        <meta property="og:description" content="Explore projects, certifications, and skills of Thavha Rambau, a passionate IT graduate and developer." />
        <meta property="og:image" content="/images/portfolio-preview.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thavha Rambau | Portfolio" />
        <meta name="twitter:description" content="Explore projects, certifications, and skills of Thavha Rambau." />
        <meta name="twitter:image" content="/images/portfolio-preview.png" />
      </Head>

      <main className="font-sans">
        <Header />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}