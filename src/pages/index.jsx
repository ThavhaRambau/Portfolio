export default function Home() {
  return (
    <main className="font-sans">
      {/* Header / Navigation */}
      <header className="bg-gray-900 text-white p-4">
        <nav>
          <ul className="flex gap-6 justify-center">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#certifications" className="hover:text-blue-400">Certifications</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Hi there, welcome to my portfolio</h1>
        <img
          src="/profile.jpg"
          alt="Portrait of Thavha Rambau"
          className="mx-auto rounded-full w-40 h-40 object-cover"
        />
        <h2 className="text-2xl mt-4">Thavha Rambau</h2>
        <p className="text-gray-600">IT Graduate | Fullstack Developer</p>
        <p className="mt-2">📍 Johannesburg, South Africa</p>
        <p className="mt-2">
          <a href="mailto:thavharambau7@gmail.com" className="text-blue-500 hover:underline">
            thavharambau7@gmail.com
          </a>
        </p>
        <p className="mt-2">
          <a href="https://www.linkedin.com/in/thavha-rambau-874947265/" target="_blank" className="text-blue-500 hover:underline">
            LinkedIn Profile
          </a>
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I am a graduate in Information Technology, with a strong academic foundation in Programming,
          Information Systems, Software Development, Business Analysis, and Web Development.
        </p>
        <p className="mt-2">
          My coursework enhanced my coding skills in Java, SQL, PHP, HTML, CSS, and JavaScript.
          I also gained leadership and teamwork experience managing a football team during university.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside">
          <li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li><li>Python</li>
          <li>Java</li><li>SQL</li><li>PHP</li><li>Visual Basic</li><li>GitHub</li>
          <li>Problem Solving</li><li>Team Collaboration</li><li>AI & Deployment</li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold">OCI Certified Data Professional</h3>
            <p>Equipped to drive innovation and build scalable AI solutions.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold">HTML & CSS</h3>
            <p>Certified in building responsive websites.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold">Deployment</h3>
            <p>Certified in deploying projects with version control tools.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="p-4 border rounded shadow">
          <h3 className="font-semibold">Portfolio Website</h3>
          <p>A personal portfolio website to showcase my projects and skills.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form action="https://formspree.io/f/xovkpvka" method="POST" className="flex flex-col gap-4 max-w-md mx-auto">
          <input type="text" name="name" placeholder="Name" required className="border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" required className="border p-2 rounded" />
          <textarea name="message" placeholder="Message" required className="border p-2 rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2026 Thavha Rambau. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="https://www.linkedin.com/in/thavha-rambau-874947265/" className="hover:text-blue-400">LinkedIn</a> | 
          <a href="https://github.com/ThavhaRambau" className="hover:text-blue-400"> GitHub</a> | 
          <a href="https://www.instagram.com/thavha.dev/" className="hover:text-blue-400"> Instagram</a>
        </div>
      </footer>
    </main>
  );
}