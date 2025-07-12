export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white px-6 py-20 md:py-20 min-h-[400px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* 왼쪽 텍스트 40% */}
        <div className="md:w-2/5 mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-md">
            James Rho
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-sm">
            Musicology PhD | Researcher, Educator & Performer
          </p>
          <a
            href="#about"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>

        {/* 오른쪽 이미지 60% */}
        <div className="md:w-3/5 flex justify-center">
          <img
            src="/images/hero-image.jpg"
            alt="James Rho"
            className="rounded-3xl shadow-xl max-w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
