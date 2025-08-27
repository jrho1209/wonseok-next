import Image from "next/image";

export default function Banner({ title, imageUrl, imageAlt = "Banner Image" }) {
  return (
    <section className="relative w-full h-72 md:h-96 overflow-hidden mb-12 flex">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center h-full pt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">
          {title}
        </h1>
      </div>
    </section>
  );
}