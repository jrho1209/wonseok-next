export default function AboutMe() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* 왼쪽 70% */}
        <div className="md:w-[70%] w-full">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            A native of Seoul, South Korea, Wonseok Lee is a PhD candidate in ethnomusicology.
            His academic interests are popular music, globalization, transnationalism and musical identity.
            His current research focuses on what the exact meaning of "K" in K-pop is, considering the circumstances
            of having non-Korean members and singing in non-Korean languages — which is common in the field,
            although the term "K-pop" represents a certain ethnicity and language.
            His work has been presented at the International Association for the Popular Music Studies (IASPM),
            Popular Culture Association (PCA), Society for Ethnomusicology (SEM), and the Association for Asian Studies (AAS).
          </p>
        </div>

        {/* 오른쪽 30% */}
        <div className="md:w-[30%] w-full">
          <img
            src="/images/about-me.jpg"
            alt="About Me"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
