import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import LecturesSec from "@/components/Home/LecturesSec";
import Newsletter from "@/components/Home/Newsletter";
import NewsSec from "@/components/Home/NewsSec";
import Testimonial from "@/components/Home/Testimonial";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <div className="w-full bg-green-100 py-20 px-20"><p className="text-8xl font-bold text-green-600">Saha Sheikh Abubakr Egypt</p></div> */}
    <Hero/>
    <NewsSec/>
    <LecturesSec/>
    <Testimonial/>
    <Newsletter/>
    <Footer/>
    </main>
  );
}
