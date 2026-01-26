export default function Home() {
  return (
    <section id="home" className="bg-white py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Hi there, welcome to my portfolio</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
        src = "my-portfolio\public\WhatsApp Image 2025-06-11 at 03.40.38_c2754ed4.jpg"
          alt="Portrait of Thavha Rambau"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-900">Thavha Rambau</h2>
          <p className="text-blue-600 font-medium mb-4">IT Graduate | Fullstack Developer</p>
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-600 mb-4">
            <i className="fa-solid fa-code"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>
          </div>
          <p className="mb-2"><i className="fa-solid fa-location-dot text-red-500"></i> South Africa, Johannesburg</p>
          <p className="mb-2">
            <a href="mailto:thavharambau7@gmail.com" className="text-blue-500 hover:underline">
              <i className="fa-solid fa-envelope"></i> thavharambau7@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/thavha-rambau-874947265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <i className="fab fa-linkedin"></i> LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}