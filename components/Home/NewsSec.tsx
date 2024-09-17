"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsCard from "../common/NewsCard";
import { BsArrowRight } from "react-icons/bs";

function NewsSec() {
  const DATA = [
    {
      id: 1,
      title: "How a visual artist redefines success in graphic design",
      body: "How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design",
      image: "",
      url: "How-a-visual-artist-redefines",
      cat: "News",
      date: "August 09, 2024",
    },
    {
      id: 2,
      title: "How a visual artist redefines success in graphic design",
      body: "How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design",
      image: "",
      url: "How-a-visual-artist-redefines",
      cat: "News",
      date: "August 09, 2024",
    },
    {
      id: 3,
      title: "How a visual artist redefines success in graphic design",
      body: "How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design",
      image: "",
      url: "How-a-visual-artist-redefines",
      cat: "News",
      date: "August 09, 2024",
    },
    {
      id: 4,
      title: "How a visual artist redefines success in graphic design",
      body: "How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design How a visual artist redefines success in graphic design",
      image: "",
      url: "How-a-visual-artist-redefines",
      cat: "News",
      date: "August 09, 2024",
    },
  ];
  return (
    <main className="flex justify-center">
      <section className="w-[90%] max-w-[1200px] flex flex-col py-20">
        <div className="flex items-center mb-10 justify-between">
          <h6 className="text-[30px] font-bold ">Events</h6>
          <a href="" className="gap-3  items-center flex duration-300 hover:font-semibold group">See All Events <BsArrowRight className="duration-300 group-hover:translate-x-[2px]"/></a>
        </div>
        <>
          <Swiper
            id="swiper"
            modules={[Autoplay]}
            breakpoints={{
              640: {   
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {   
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {DATA?.map((item: any, index: number) => (
              <div key={index}>
                <SwiperSlide>
                  <NewsCard data={item} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </>
      </section>
    </main>
  );
}

export default NewsSec;
