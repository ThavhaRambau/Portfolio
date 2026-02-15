import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js, Tailwind CSS, and deployed on Vercel.",
      image: "/images/portfolio.png",
      link: "https://portfolio.vercel.app"
    },
    {
      title: "E-Commerce Store",
      description: "A full-stack e-commerce application with product listings, cart, and checkout.",
      image: "/images/ecommerce.png",
      link: "https://github.com/ThavhaRambau/ecommerce"
    },
    {
      title: "AI Chatbot",
      description: "An AI-powered chatbot integrated with cloud infrastructure for scalability.",
      image: "/images/chatbot.png",
      link: "https://github.com/ThavhaRambau/ai-chatbot"
    }
  ]

  return (
    <section id="projects" className="p-8 bg-gray-100" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-white">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="mt-4 font-semibold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}