export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Thavha Rambau. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex gap-6">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/thavha-rambau-874947265/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            title="LinkedIn"
          >
            <svg className="w-6 h-6 hover:text-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-8.5c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/ThavhaRambau" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            title="GitHub"
          >
            <svg className="w-6 h-6 hover:text-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.7 1.9-1.1.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/thavha.dev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            title="Instagram"
          >
            <svg className="w-6 h-6 hover:text-pink-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
            </svg>
          </a>

          {/* Email */}
          <a 
            href="mailto:thavharambau7@gmail.com" 
            aria-label="Email" 
            title="Email"
          >
            <svg className="w-6 h-6 hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13.5l-11-7V20h22V6.5l-11 7zM12 11L1 4h22L12 11z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}