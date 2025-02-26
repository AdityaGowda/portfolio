export default function Badge({ tech = [] }) {
  return (
    <>
      {tech.map((v, i) => {
        return (
          <h3
            className="badge bg-slate-500 max-w-fit flex pt-2 pb-2 pl-5 pr-5 rounded-3xl max-950:text-sm"
            key={i}
          >
            {v}
          </h3>
        );
      })}
    </>
  );
}
