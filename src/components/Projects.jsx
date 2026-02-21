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
    <section id="projects" className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of my work in web development, cloud infrastructure, and AI.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <button 
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View Project
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}