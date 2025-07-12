import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function HomePage() {
  return (
    <>
    <Hero />
    <AboutMe />
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to James Rho's Musicology Portfolio</h1>
      <p className="mb-4 text-lg">
        I am a Musicology PhD specializing in 20th-century composers, sonic analysis, and performance studies.
      </p>
      <p>
        Explore my research, teaching, invited talks, and more using the navigation menu above.
      </p>
    </main>
    </>
  );
}


