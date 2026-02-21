export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Python",
    "Java", "SQL", "PHP", "Visual Basic", "GitHub",
    "Problem Solving", "Team Collaboration", "AI & Deployment"
  ]

  return (
    <section id="skills" className="py-16 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
        <p className="text-gray-600 mb-8">
          A blend of technical expertise and collaborative abilities that drive impactful solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}