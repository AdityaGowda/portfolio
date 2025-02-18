import Projects from "../projects/projects";

export default function MyWork() {
  return (
    <section className="myWork  h-full mt-60">
      <div className="workContainer  max-950:p-5 pl-40">
        <p className="header subTitle text-8xl font-extrabold w-14 text-wrap  max-950:text-7xl">
          My Work
        </p>
        <p className="subHeader myworkDetails pt-10 text-2xl max-w-xl max-950:text-[1.2rem]">
          Deployed scalable, responsive web and hybrid mobile apps that served
          hundreds of thousands of clients.
        </p>
        <p className="subHeader myworkDetails pt-10 text-2xl max-w-xl  max-950:text-[1.2rem]">
          Focused on high-performing applications with intuitive and dynamic
          interactions. I also have a passion for data analytics and
          visualization.
        </p>
      </div>
      <Projects />
    </section>
  );
}
