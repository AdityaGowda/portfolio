import Image from "next/image";
export default function Footer() {
  return (
    <section
      className="p-20 text-center flex 
   justify-end flex-col gap-10 mt-60 "
    >
      <div className="flex justify-center gap-10  cursor-pointer ">
        <a href="https://www.linkedin.com/in/adithya-dev/">
          <Image
            src="/icons/linkedin.png"
            className=""
            width="55"
            height="55"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/AdityaGowda">
          <Image
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
