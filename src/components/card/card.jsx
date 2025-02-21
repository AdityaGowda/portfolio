"use client";
import Image from "next/image";
import { useState } from "react";

export default function Card({
  mainImage,
  title,
  description,
  tech = [],
  telegram = null,
  projectLink,
}) {
  const [usedTechList, setUsedTechList] = useState([...tech]);
  return (
    <div className=" max-w-[500px] rounded-lg card-shadow cursor-pointer transition-all duration-300 transform hover:rotate  bg-white/5 backdrop-blur-md m-0 ">
      <div className="px-6 py-4 h-[200px] text-white max-h-[600px] max-950:h-fit ">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-neutral-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <div className="flex -space-x-[1px] rtl:space-x-reverse">
          {usedTechList.map((v, i) => {
            return (
              <Image
                key={i}
                className=" w-9 h-9 rounded-full"
                src={`/icons/${v}`}
                alt={v}
                width={100}
                height={100}
              />
            );
          })}
        </div>
        {telegram && (
          <a href={projectLink}>
            <Image
              src={telegram}
              className="w-7 h-7"
              alt="github Repo link"
              width={100}
              height={100}
            />
          </a>
        )}
      </div>
    </div>
  );
}
