export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Have a question or want to collaborate? Feel free to reach out using the form below.
        </p>

        <form 
          action="https://formspree.io/f/xovkpvka" 
          method="POST" 
          className="flex flex-col gap-4 max-w-md mx-auto text-left"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            rows="5"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          
          <button 
            type="submit" 
            className="bg-blue-600 text-white font-semibold p-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}