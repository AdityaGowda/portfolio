import Projects from "../projects/projects";

export default function MyWork() {
  return (
    <section className="myWork  h-full mt-80">
      <div className="workContainer  pl-40">
        <p className="header subTitle text-8xl font-extrabold w-14 text-wrap">
          My Work
        </p>
        <p className="subHeader myworkDetails pt-10 text-2xl max-w-xl">
          Deployed scalable, responsive web and hybrid mobile apps that served
          hundreds of thousands of clients.
        </p>
        <p className="subHeader myworkDetails pt-10 text-2xl max-w-xl">
          Focused on high-performing applications with intuitive and dynamic
          interactions. I also have a passion for data analytics and
          visualization.
        </p>
      </div>
      <Projects />
    </section>
  );
}
