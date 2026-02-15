export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS to showcase my skills and projects.",
      image: "/images/portfolio.png", // place your screenshot in public/images
      github: "https://github.com/ThavhaRambau/portfolio",
      demo: "https://portfolio.vercel.app"
    },
    {
      title: "AI Deployment Project",
      description: "An OCI-certified project deploying scalable AI solutions in the cloud.",
      image: "/images/ai-project.png",
      github: "https://github.com/ThavhaRambau/ai-deployment",
      demo: "#"
    },
    {
      title: "Football Management App",
      description: "A hobby project to manage football teams, track stats, and build leadership skills.",
      image: "/images/football-app.png",
      github: "https://github.com/ThavhaRambau/football-app",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="p-8 bg-gray-50" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg shadow hover:shadow-lg transition bg-white">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}