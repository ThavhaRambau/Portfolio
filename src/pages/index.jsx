import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}