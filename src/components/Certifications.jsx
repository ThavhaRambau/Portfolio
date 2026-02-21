export default function Certifications() {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Certified Data Professional",
      issuer: "Oracle",
      year: "2024",
      description: "Validated expertise in deploying scalable AI solutions and managing cloud infrastructure."
    },
    {
      title: "GitHub Version Control & Deployment",
      issuer: "GitHub",
      year: "2023",
      description: "Demonstrated proficiency in repository organization, project deployment, and testing workflows."
    },
    {
      title: "Web Development Foundations",
      issuer: "University Coursework",
      year: "2022",
      description: "Strong academic foundation in HTML, CSS, JavaScript, and modern frameworks."
    }
  ]

  return (
    <section id="certifications" className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications</h2>
        <p className="text-gray-600 mb-12">
          Recognitions and achievements that validate my technical expertise and professional growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{cert.issuer} • {cert.year}</p>
              <p className="text-gray-600 mt-3">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}