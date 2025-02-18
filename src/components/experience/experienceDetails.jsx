import Image from "next/image";
import icons from "@/components/icons/getIcon";
import Badge from "./badge";

export default function ExperienceDetails({
  logo = "#",
  location,
  company,
  description,
  tech = [],
  companyLink,
}) {
  return (
    <div className="p-4 mt-5 mb-5 exp-details flex flex-col text-wrap  rounded-lg gap-4 border-white/20 hover:bg-white/20 backdrop-blur-md  bg-white/10 text-white ">
      <Image
        src={logo}
        className="logo"
        id="urbanpro"
        alt="logo"
        width="130"
        height="130"
      />
      <div className="locationDetails flex gap-3 items-center">
        <span>
          <icons.Location />
        </span>
        <span>{location}</span>
      </div>

      <div className="companyDetails">
        <a href={companyLink} className="flex gap-3 items-center">
          <span>
            <icons.LineLink />
          </span>
          <span>{company}</span>
        </a>
      </div>
      <p>{description}</p>
      <div className="skills flex gap-4">
        {tech.length > 0 &&
          tech.map((v, i) => {
            return (
              <span key={i}>
                <Badge text={v} />
              </span>
            );
          })}
      </div>
    </div>
  );
}
