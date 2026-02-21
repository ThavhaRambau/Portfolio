export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          I am a graduate in <span className="font-semibold text-blue-600">Information Technology</span>, 
          with a strong academic foundation in Programming, Information Systems, Software Development, 
          Business Analysis, and Web Development.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          My coursework enhanced my coding skills in <span className="font-semibold">Java, SQL, PHP, HTML, CSS, and JavaScript</span>. 
          I also gained valuable leadership and teamwork experience by managing a football team during university, 
          which strengthened my ability to collaborate and solve problems creatively.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Today, I combine my technical expertise with a passion for building scalable, user‑friendly solutions 
          that bridge technology and people. My focus is on creating polished, accessible, and impactful digital experiences.
        </p>

        {/* ✅ Download Resume Button */}
        <a 
          href="/Thavha-Rambau-Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}