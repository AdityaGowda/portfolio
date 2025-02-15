export default function Badge({ text }) {
  return (
    <p className="badge bg-slate-500 max-w-fit flex pt-2 pb-2 pl-5 pr-5 rounded-3xl">
      {text}
    </p>
  );
}
