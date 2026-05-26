export default function Certifications() {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Certified",
      issuer: "Oracle",
      year: "2025",
    },
    {
      title: "AI Deployment Specialist",
      issuer: "Microsoft Learn",
      year: "2025",
    },
    {
      title: "Fullstack Web Development",
      issuer: "FreeCodeCamp",
      year: "2024",
    },
  ]

  return (
    <section id="certifications" className="py-16 bg-background" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text mb-8">Certifications</h2>
        <p className="text-text mb-6">
          Recognized credentials that validate my skills in cloud, AI, and fullstack development.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 p-6 text-left border border-transparent hover:border-primary"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{cert.title}</h3>
              <p className="text-text">{cert.issuer}</p>
              <p className="text-text text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}