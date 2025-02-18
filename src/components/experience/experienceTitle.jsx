import icons from "@/components/icons/getIcon";

export default function ExperienceTitle({
  title,
  timeLine,
  onclick,
  dropDown,
}) {
  return (
    <div
      className="experienceTitle p-6 bg-neutral-950 rounded-lg flex justify-between  bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md
 w-full   max-w-[900px] mx-15 max-950:w-max[500px]"
      onClick={onclick}
    >
      <p className="text-lg">{title}</p>
      <div className="flex items-center gap-7">
        <p className="text-lg max-950:hidden">{timeLine}</p>

        {dropDown ? (
          <span className="transition-transform duration-300 rotate-180">
            <icons.Minus />
          </span>
        ) : (
          <span className="transition-transform duration-300 rotate-90">
            <icons.Plus />
          </span>
        )}
      </div>
    </div>
  );
}
