import Banner from "@/components/Banner";
import { FaCircle } from "react-icons/fa";

export default function TeachingPage() {
  const teachingHistory = [
    {
      school: "Yale University",
      period: "Spring 2025",
      courses: [
        "Music In Flux: Blendings, Exchanges, and Cultural Significances",
      ],
    },
    {
      school: "Washington University in St. Louis",
      period: "2023-2024",
      courses: [
        "Introduction to K-Pop: Korean Popular Music and Society",
        "The Korean Wave: Reading Korea Through Popular Culture and Media",
        "Global Korean Music Through A Cultural Lens",
      ],
    },
    {
      school: "The Ohio State University",
      period: "2019-2023",
      courses: [
        "Music on the Move",
        "Music Cultures of the World",
        "History of Rock 'n' Roll",
        "The Worlds of Music",
        "Introduction to Jazz",
      ],
    },
    {
      school: "Bowling Green State University",
      period: "2017-2018",
      courses: [
        "Introduction to Popular Culture",
        "Asian Popular Music",
      ],
    },
  ];

  return (
    <>
      <Banner
        title="Teaching"
        imageUrl="/images/banner.jpg"
        imageAlt="Teaching Banner"
      />
      <main className="max-w-3xl mx-auto px-6">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300 -mr-0.2"
            aria-hidden="true"
          />
          <ul className="space-y-12 pl-0">
            {teachingHistory.map((item, idx) => (
              <li key={idx} className="relative flex items-start">
                {/* Dot */}
                <span className="absolute left-2 top-2 text-gray-900 -ml-1">
                  <FaCircle size={10} />
                </span>
                <div className="ml-12">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <span className="text-lg font-semibold text-gray-900">
                      {item.school}
                    </span>
                    <span className="text-gray-500 text-sm">{item.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 pl-0 ml-0">
                    {item.courses.map((course, cidx) => (
                      <li key={cidx} className="ml-0">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
