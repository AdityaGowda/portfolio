"use client";
import Image from "next/image";

export default function Card({
  mainImage,
  title,
  description,
  tech = [],
  telegram = null,
  customClass,
}) {
  console.log(tech);
  return (
    <div className="max-w-lg rounded-xl card-shadow cursor-pointer transition-all duration-300 transform hover:rotate  bg-white/5 backdrop-blur-md ">
      <Image src={mainImage} alt="Elearn" className="rounded-xl" />
      <div className="px-6 py-4 h-44 text-white">
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
                  className=" w-9 h-9 rounded-full"
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
