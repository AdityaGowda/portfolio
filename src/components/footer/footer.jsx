export default function Footer() {
  return (
    <section
      className="p-20 text-center flex 
   justify-end flex-col gap-10 mt-32 "
    >
      <div className="flex justify-center gap-10  cursor-pointer ">
        <a href="https://www.linkedin.com/in/AdithyaMR/">
          <img
            src="/icons/linkedin.png"
            className=""
            width="55"
            height="55"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/AdityaGowda">
          <img
            src="/icons/gitHub.png"
            className=""
            alt="github"
            width="55"
            height="55"
          />
        </a>
      </div>
      <p className="">Adithya M R ©{new Date().getFullYear()}</p>
    </section>
  );
}
