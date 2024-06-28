"use client";

import React, {useRef, useEffect} from "react";
import ZenithContainer from "../ui/About/ZenithContainer";
import { valuesData } from "@/src/data/CoreValuesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
interface SwiperComponentProps{
  slideIndex: number;
}
const ZenithSection = React.forwardRef<HTMLDivElement, SwiperComponentProps>(({ slideIndex }, ref) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  }, [slideIndex]);
  return (
    <div ref={ref}className="w-full h-screen flex justify-center items-center cursor-grab">
      <Swiper loop={true} modules={[Pagination]} className="mySwiper" ref={swiperRef}>
        {valuesData.map((value, index) => (
          <SwiperSlide key={index}>
            <ZenithContainer
              imgSrc={value.imageUrl}
              iconSrc={value.iconUrl}
              value={value.value}
              description={value.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default ZenithSection;