import icons from "@/components/icons/getIcon";

export default function ExperienceTitle({
  title,
  timeLine,
  onclick,
  dropdown,
}) {
  return (
    <div
      className="experienceTitle p-6  bg-neutral-950 rounded-lg flex justify-between gap-14"
      onClick={onclick}
    >
      <p className="">{title}</p>
      <div className="flex items-center gap-7">
        <p className="">{timeLine}</p>

        {dropdown ? (
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
