"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";

export default function FancyCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    function updateSlidesPerView() {
      setSlidesPerView(window.innerWidth > 1024 ? 3 : 1);
    }
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="relative max-w-[1000px] mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 9000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop={true}
        className="rounded-lg overflow-hidden"
        spaceBetween={20}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <SwiperSlide key={num}>
            <img
              src={`/images/caro-${num}.jpg`}
              alt={`Slide ${num}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <img src="/images/hero-img.jpg" alt="Slide 8" className="w-full h-48 object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>

      {/* 커스텀 이전 버튼 */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 z-10"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* 커스텀 다음 버튼 */}
      <button
        ref={nextRef}
        className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 z-10"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
