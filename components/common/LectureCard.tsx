import React from "react";
import { getRelativeTime } from "./DateConvert";
import { ROOT_URL } from "../data/func";
import Link from "next/link";
import { encodeId } from "./decode";
import { BsArrowRight } from "react-icons/bs";

function LectureCard({ data }: { data: any }) {
  return (
    <Link href={`/${data.url + "_" + data.id}`}>
      <div
  className="bg-[url('/images/news-bg.jpg')] bg-center bg-cover bg-no-repeat flex flex-col gap-4 group h-[450px]  w-full overflow-hidden rounded-2xl relative inner-shadow "
>

        <div className="flex translate-y-16 group-hover:translate-y-0 flex-col gap-2 h-full justify-end group-hover:backdrop-blur-[3px] p-10 duration-300 overflow-hidden">
          <p className=" text-[12px] w-fit uppercase font-semibold px-4 py-[6px] rounded-3xl bg-white"><span className="font-normal">Part </span>{data.id}</p>
          <h6 className="text-xl font-bold line-clamp-2 group-hover:text-yellow-100 text-white duration-200">
            {data.title}
          </h6>
          <p className="text-sm text-zinc-200">{data?.date}</p>
          {/* <article
            className="mt-2 line-clamp-[2]"
            dangerouslySetInnerHTML={{ __html: data.body }}
          /> */}

          <p className="mt-10 group-hover:mt-2 flex items-center uppercase text-[12px] font-semibold gap-3 group-hover:gap-4 duration-200 border-b pb-1 text-white w-fit border-zinc-200">
          Continue Reading <BsArrowRight />
        </p>
        </div>
      </div>
    </Link>
  );
}

export default LectureCard;
