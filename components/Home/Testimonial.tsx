"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Testimonial() {
  const TEST = [
    {
      photo: "rev1.jpg",
      name: "Mohammad Al Kaabi",
      designation: "Al Ain, Abu Dhabi",
      dis: "Had a wonderful lunch at House of Tea in Al Ain. The menu has a good variety, and the food quality is top-notch. The service was efficient, and the prices are reasonable.",
    },
    {
      photo: "rev1.jpg",
      name: "Fatima Ibrahim",
      designation: "Abu Dhabi ",
      dis: "Enjoyed a fantastic breakfast at House of Tea .  the food was fresh and tasty. Their Paratha sandwich  and karak tea are simply delicious. Will definitely visit again",
    },
    {
      photo: "rev1.jpg",
      name: "Ali Al Mazrouei",
      designation: "Khalifa City, Abu Dhabi",
      dis: "House of Tea in Khalifa City is my go-to spot for a quick lunch. The sandwiches are excellent, and  fresh. The staff is attentive",
    },
    {
      photo: "rev1.jpg",
      name: "Juan dela Cruz",
      designation: "Abu Dhabi",
      dis: "Ang House of Tea , Abu Dhabi ay isang napakasarap na karanasan! Ang pagkain ay masarap at puno ng sariwang lasa, lalo na ang kanilang chili paratha at tsaa. Ang serbisyo ay mabilis at magiliw",
    },
    {
      photo: "rev1.jpg",
      name: "Mohammad Al Kaabi",
      designation: "Al Ain, Abu Dhabi",
      dis: "Had a wonderful lunch at House of Tea in Al Ain. The menu has a good variety, and the food quality is top-notch. The service was efficient, and the prices are reasonable.",
    },
    {
      photo: "rev1.jpg",
      name: "Fatima Ibrahim",
      designation: "Abu Dhabi ",
      dis: "Enjoyed a fantastic breakfast at House of Tea .  the food was fresh and tasty. Their Paratha sandwich  and karak tea are simply delicious. Will definitely visit again",
    },
  ];
  return (
    <section className="testimonials pb-20 flex flex-col justify-center w-full bg-secondary/50">
      
      
                <p className="text-white w-full overflow-hidden mb-12">
                  ===========================================================================================================================================================================
                </p>
      <div className=" w-[90%] max-w-[1200px] flex flex-col items-center mx-auto">
        <div className="flex items-center justify-between">
          <h6 className="text-[30px] font-bold mb-6 flex gap-3 items-center"> What our students say</h6>
           
        </div>
        <Swiper
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
              slidesPerView: 4, // Set the proper number of slides for large screens
              spaceBetween: 15,
            },
          }}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full" // Ensures that Swiper uses full width of the container
        >
          {TEST.map((item: any, index: number) => (
            <SwiperSlide>
              <div
                key={index}
                className="bg-secondary h-fit flex flex-col rounded-2xl text-white mt-10 "
              >
                <div className="flex h-5">
                  <div
                    className="h-20 w-20 rounded-full mx-auto -translate-y-10"
                    style={{
                      background: `url(/images/testimonial-user.jpg)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div className="text-yellow-200 text-lg mt-10 mb-5 flex items-center gap-1 justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className={` text-[15px] line-clamp-5 px-10`}>{item.dis}</p>
                <p className="text-secondary bg-primary mt-6 w-full overflow-hidden">
                  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                </p>
                <div className="flex flex-col px-10 py-5 pb-6 bg-primary p-0  rounded-b-2xl">
                  <h6 className="font-bold  w-fit">{item.name}</h6>
                  <p className="text-white text-sm flex gap-2 items-center">
                    <FaLocationDot className="text-[12px] text-secondary" />
                    {item.designation}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
