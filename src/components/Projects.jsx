import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React, Tailwind CSS, and Next.js.",
      image: "/images/portfolio.png",
      link: "https://portfolio.vercel.app",
    },
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by OpenAI, deployed on the cloud.",
      image: "/images/chatbot.png",
      link: "https://github.com/thavha/chatbot",
    },
    {
      title: "E-commerce Platform",
      description: "A fullstack e-commerce site with product listings, cart, and checkout.",
      image: "/images/ecommerce.png",
      link: "https://github.com/thavha/ecommerce",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-background" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text mb-8">Projects</h2>
        <p className="text-text mb-6">
          Real-world applications that demonstrate my ability to build, deploy, and scale software solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 p-4 text-left border border-transparent hover:border-primary"
            >
              <div className="mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-text mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-accent transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}