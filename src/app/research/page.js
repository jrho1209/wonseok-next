import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function ResearchPage() {
  // 각 연구/출판물 데이터
  const researchItems = [
    {
      title: "From Policy to Pop: Navigating South Korean Cultural Polices and their Impact on Korean Popular Music.",
      desc: "Korean Studies (forthcoming)",
      img: "/images/research.jpg",
    },
    {
      title: "“Next Level”: aespa’s Storyworld and Cultural Significance.",
      desc: "In Critical Approaches to Transmedia Storytelling in K-Pop, edited by Nicholas E. Miller. London: Bloomsbury Academic (forthcoming)",
      img: "/images/research.jpg",
    },
    {
      title: "A Century in the Making: Korean Popular Music’s Abbreviation to K-Pop.",
      desc: "With PH Kim. In Contemporary Korean Culture from the Edge, edited by Jooyeon Rhee, Hong Kal, and Thomas R Klassen. Bloomsbury Publishing (forthcoming)",
      img: "/images/research.jpg",
    },
    {
      title: "Tradition, Transition, and Trends: Contextualizing of BTS’s Kugak-Inspired Performance of ‘Idol.’",
      desc: "In Bangtan Remixed: A Critical BTS Reader, edited by Patty Ahn et al. Duke University Press, 2024",
      img: "/images/research.jpg",
    },
    {
      title: "‘I Need U’: Audience Participation in BTS’s Online Concerts During COVID-19.",
      desc: "With G. Kao. Journal of Popular Music Studies vol. 35 (1): 46–66, 2023",
      img: "/images/research.jpg",
    },
    {
      title: "‘This Is How We Support K-pop Stars’: From Unilateral Support to Mutually Inspired Partnership.",
      desc: "Korean Journal of Popular Music 30: 77–115, 2022",
      img: "/images/research.jpg",
    },
    {
      title: "‘Make It Right’: Why #BlackLivesMatter(s) to K-pop, BTS, and BTS ARMYs.",
      desc: "With G. Kao. IASPM Journal vol. 11 (2): 70–87, 2021",
      img: "/images/research.jpg",
    },
    {
      title: "Industrial Hip Hop against the Hip Hop Industry: The Critical Noise of XXX.",
      desc: "With PH Kim. Journal of World Popular Music vol.7 (2): 186–204, 2021",
      img: "/images/research.jpg",
    },
    {
      title: "‘You Know You’re Missing Out on Something’: Collective Nostalgia and Community in Tim’s Twitter Listening Party during COVID-19.",
      desc: "With G. Kao. Rock Music Studies vol.8 (1): 36–52, 2020",
      img: "/images/research.jpg",
    },
    // Book reviews
    {
      title: "A review of The Cambridge Companion to K-Pop. Edited by Suk-Young Kim.",
      desc: "Journal of Asian Studies, vol. 83.3, 2024",
      img: "/images/research.jpg",
    },
    {
      title: "A review of Pop City: Korean Popular Culture and the Selling of Place by Youjeong Oh.",
      desc: "Journal of Asian Studies, vol.81.1, 2022",
      img: "/images/research.jpg",
    },
    {
      title: "Live from Korea, live from anywhere: A review of K-pop Live: Fans, Idols and Multimedia Performance by Suk-Young Kim.",
      desc: "SINONK, 2019",
      img: "/images/research.jpg",
    },
    // Op-eds
    {
      title: "확장성의 역사 케이팝: 가상 아이돌의 의미와 가능성 (K-Pop’s Expandability: The Meaning of Virtual Idols and its Possibility)",
      desc: "HallyuNow 58, 2024",
      img: "/images/research.jpg",
    },
    {
      title: "Can BTS Protect Asian Americans from Xenophobia in the Age of COVID-19?",
      desc: "With G. Kao. Contexts (April 1), 2020",
      img: "/images/research.jpg",
    },
  ];

  return (
    <>
    <Banner
            title="Research & Publications"
            imageUrl="/images/banner.jpg"
            imageAlt="Banner Image"/>
    <main className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {researchItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-4"
          >
            <div className="w-[250px] h-[250px] mb-4 rounded-lg overflow-hidden shadow">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full"
                width={250}
                height={250}
              />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-2 text-center">{item.title}</h2>
              <p className="text-gray-600 text-xs text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
    </>
  );
}
