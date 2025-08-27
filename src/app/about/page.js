import Banner from "@/components/Banner";

export default function AboutPage() {
  return (
    <>
    <Banner
        title="About"
        imageUrl="/images/banner.jpg"
        imageAlt="Banner Image"
      />
    <main className="max-w-3xl mx-auto py-0 px-6">
      
      <section className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-xl p-8 shadow mb-12">
        <img
          src="/images/about-me.jpg"
          alt="Wonseok Lee"
          className="w-64 h-64 rounded-lg object-cover shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Wonseok Lee, Ph.D.</h1>
          <h2 className="text-lg text-gray-500 mb-4">Musicologist · Researcher · Educator</h2>
          <p className="text-gray-800 leading-relaxed">
            A native of Seoul, South Korea, Wonseok Lee is a PhD candidate in ethnomusicology. His academic interests are popular music, globalization, transnationalism and musical identity. His current research focuses on what the exact meaning of "K" in K-pop is, considering the circumstances of having non-Korean members and singing in non-Korean languages — which is common in the field, although the term "K-pop" represents a certain ethnicity and language. His work has been presented at the International Association for the Popular Music Studies (IASPM), Popular Culture Association (PCA), Society for Ethnomusicology (SEM), and the Association for Asian Studies (AAS).
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
