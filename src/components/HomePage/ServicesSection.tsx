"use client";

import React from "react";
import Image from "next/image";
import ServicesCard from "@/src/components/ui/ServicesCard";
import imgSrc from "@/public/assets/images/asset1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ServicesSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-lightGray">
      <div className="w-[6.5rem] h-[13rem] absolute left-8">
        <Image
          src={imgSrc}
          alt="icon"
          className="object-fill"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <div className="w-[60rem] h-screen">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper h-screen"
        >
          <SwiperSlide>
            <ServicesCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSection;
