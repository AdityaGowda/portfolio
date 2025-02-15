"use client";
import Image from "next/image";

export default function Card({
  mainImage,
  title,
  description,
  tech = [],
  telegram = null,
}) {
  console.log(tech);
  return (
    <div className="max-w-sm rounded overflow-hidden  rounded-xl card-shadow cursor-pointer">
      <Image className="w-full" src={mainImage} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-neutral-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <div className="flex -space-x-2 rtl:space-x-reverse">
          {tech.length > 0 &&
            tech.map((v, i) => {
              return (
                <Image
                  key={i}
                  className="bg-black w-9 h-9 border-2 border-white rounded-full dark:border-gray-800"
                  src={v}
                  alt=""
                />
              );
            })}
        </div>
        {telegram && (
          <Image src={telegram} className="w-7 h-7" alt="Live link" />
        )}
      </div>
    </div>
  );
}
