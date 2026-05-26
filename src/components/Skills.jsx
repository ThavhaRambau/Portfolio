export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Python", "Java",
    "SQL", "PHP", "Visual Basic", "GitHub", "Next.js", "Tailwind CSS",
    "OCI Certified", "AI Deployment", "Project Management", "Team Collaboration"
  ]

  return (
    <section id="skills" className="py-16 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text mb-8">Skills</h2>
        <p className="text-text mb-6">
          A blend of technical expertise and collaborative problem-solving.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block px-4 py-2 bg-background text-text rounded-full shadow hover:bg-primary hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}