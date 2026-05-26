import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-white fixed w-full top-0 z-50 shadow">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
        
        {/* Logo / Name */}
        <div className="text-xl font-bold tracking-wide">Thavha Rambau</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#home" className="hover:text-accent transition">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#skills" className="hover:text-accent transition">Skills</a></li>
          <li><a href="#certifications" className="hover:text-accent transition">Certifications</a></li>
          <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 bg-background p-4 md:hidden">
          <li><a href="#home" className="hover:text-primary transition">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition">About</a></li>
          <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
          <li><a href="#certifications" className="hover:text-primary transition">Certifications</a></li>
          <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
        </ul>
      )}
    </header>
  )
}