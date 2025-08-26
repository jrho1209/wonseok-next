export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-30 px-6">
      <section className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-xl p-8 shadow mb-12">
        <img
          src="/images/about-me.jpg"
          alt="Wonseok Lee"
          className="w-64 h-64 rounded-lg object-cover shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-semibold mb-2 text-gray-900">Wonseok Lee, Ph.D.</h1>
          <h2 className="text-lg text-gray-500 mb-4">Musicologist · Researcher · Educator</h2>
          <p className="text-gray-800 leading-relaxed">
            Hello! I’m a passionate musicologist with a doctorate in musicology, specializing in 20th-century composers and sonic structures.
            My research explores the intersection of music, technology, and culture, with a focus on how sound shapes our understanding of modernity.
          </p>
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Academic Background</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ph.D. in Musicology, [Your University], [Year]</li>
            <li>M.A. in Music Theory, [Your University]</li>
            <li>B.A. in Music, [Your University]</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Research Interests</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>20th & 21st-century composers</li>
            <li>Sound analysis & sonic structure</li>
            <li>Music technology & digital humanities</li>
            <li>Interdisciplinary approaches to music</li>
          </ul>
        </div>
      </section>

     
    </main>
  );
}
