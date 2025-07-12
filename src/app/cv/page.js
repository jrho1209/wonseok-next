export default function CVPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">CV</h1>
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Download CV
      </a>
    </main>
  );
}
