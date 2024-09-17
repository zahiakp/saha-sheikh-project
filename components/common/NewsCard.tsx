import React from "react";
import { getRelativeTime } from "./DateConvert";
import { ROOT_URL } from "../data/func";
import Link from "next/link";
import { encodeId } from "./decode";
import { BsArrowRight } from "react-icons/bs";

function NewsCard({ data }: { data: any }) {
  return (
    <Link href={`/${data.url+"_"+data.id}`}>
      <div className="flex flex-col gap-4 group">
        <div className="h-48 w-full overflow-hidden rounded-xl  col-span-3 relative">
          <img
            src={
              // data.image != ""
              //   ? `${ROOT_URL}uploads/news/${data.image}`:
                 "/images/news-bg.jpg"
            }
            className="h-full w-full object-cover group-hover:rotate-1 duration-300 group-hover:scale-105"
          />
          <p className="absolute bottom-4 left-4 p-[6px] px-4 rounded-lg bg-zinc-100 text-sm w-fit uppercase font-semibold">
            {data.cat}
          </p>
        </div>
        
          <p className="text-sm text-zinc-400 -mb-2">
            {data?.date}
          </p>
          <h6 className="text-xl font-bold line-clamp-2 group-hover:text-primary duration-300">{data.title}</h6>
          {/* <article
            className="mt-2 line-clamp-[2]"
            dangerouslySetInnerHTML={{ __html: data.body }}
          /> */}
        
<p className="flex items-center uppercase text-[12px] font-semibold gap-3 group-hover:gap-4 duration-300 border-b pb-1 w-fit border-zinc-800">Continue Reading <BsArrowRight />
</p>
      </div>
    </Link>
  );
}

export default NewsCard;
