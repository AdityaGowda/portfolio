import Image from "next/image";
import icons from "@/components/icons/getIcon";

export default function ExperienceDetails({
  logo = "#",
  location,
  company,
  description,
  tech = [],
}) {
  return (
    <div className="experienceDetails p-4 mt-5 mb-5 flex flex-col bg-neutral-950 text-wrap transition-all duration-400 ease-in-out overflow-auto rounded-lg gap-4 ">
      {/* <Image src={logo} className="logo" id="urbanpro" alt="logo" /> */}
      <div className="locationDetails flex gap-3 items-center">
        <span>
          <icons.Location />
        </span>
        <span>{location}</span>
      </div>

      <div className="companyDetails flex gap-3 items-center">
        <span>
          <icons.LineLink />
        </span>
        <span>{company}</span>
      </div>
      <p>{description}</p>
      <div className="skills">
        {tech.length > 0 &&
          tech.map((v, i) => {
            return <Badge text={v} />;
          })}
      </div>
    </div>
  );
}
