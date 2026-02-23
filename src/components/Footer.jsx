import { FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Thavha Rambau. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/thavha" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/thavha" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaGithub size={20} />
          </a>
          <a href="https://open.spotify.com/user/thavha" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaSpotify size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}