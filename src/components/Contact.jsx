export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form action="https://formspree.io/f/xovkpvka" method="POST" className="flex flex-col gap-4 max-w-md mx-auto">
        <input type="text" name="name" placeholder="Name" required className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" required className="border p-2 rounded" />
        <textarea name="message" placeholder="Message" required className="border p-2 rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
}