"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IsotypeCarousel } from "@/data/isotype-data";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function IsotypesCarousel() {
  return (
    <div className="google__reviews--carousel-wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        slidesPerGroup={1}
        autoHeight={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
        }}>
        {IsotypeCarousel.map((item) => {
          return (
            <SwiperSlide
              className="bg-primary-subtle h-full aspect-square flex items-center justify-center px-8 cursor-crosshair relative rounded-lg"
              key={item.imageId}>
              <Image
                className="hover:opacity-0 hover:hidden transition-all ease-in-out duration-300 w-full h-auto"
                src={item.isotype}
                alt={item.alt}
              />
              <div className="opacity-0 hover:opacity-100 overlay bg-primary-subtle absolute top-0 bottom-0 left-0 right-0 h-full w-full flex items-center justify-center transition-all ease-in-out duration-[400ms]">
                <Image src={item.hover} alt={item.alt} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
