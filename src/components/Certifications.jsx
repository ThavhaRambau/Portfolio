export default function Certifications() {
  return (
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
  );
}