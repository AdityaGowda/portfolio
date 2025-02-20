import Image from "next/image";
import icons from "@/components/icons/getIcon";
import Badge from "./badge";

export default function ExperienceDetails({
  logo = "#",
  location,
  company,
  description = [],
  tech = [],
  companyLink,
}) {
  return (
    <div className="p-4 mt-5 mb-5 flex flex-col text-wrap rounded-lg  gap-2 border-white/20 hover:bg-white/20 backdrop-blur-md  bg-white/10 text-white  max-w-[900px]  ">
      <p className="logo text-5xl font-bold text-white ">
        {logo}
      </p>

      <div className="locationDetails flex mt-5 gap-3 items-center">
        <span>
          <icons.Location />
        </span>
        <span className="text-lg">{location}</span>
      </div>

      <div className="companyDetails">
        <a href={companyLink} className="flex gap-3 items-center">
          <span>
            <icons.LineLink />
          </span>
          <span className="text-lg">{company}</span>
        </a>
      </div>
      <ul className="mt-5">
        {description.map((item, index) => (
          <li className="text-lg mt-2" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="skills flex gap-4 w-full flex-wrap mt-5">
        <Badge tech={tech} />
      </div>
    </div>
  );
}
