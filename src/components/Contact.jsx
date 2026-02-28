export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-background" data-aos="fade-up">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text mb-6">Contact Me</h2>
        <p className="text-text mb-6">
          Feel free to reach out for collaboration, questions, or just to say hello.
        </p>

        {/* Formspree integration */}
        <form
          action="https://formspree.io/f/xovkpvka"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold p-3 rounded hover:bg-accent transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}