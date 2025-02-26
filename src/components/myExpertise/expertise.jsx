"use client";
import { motion } from "framer-motion";
export default function Expertise() {
  return (
    <section className="expertiseContainer">
      <div className="flex flex-col justify-center items-center">
        <motion.p
          className="header text-center text-7xl mb-16 font-extrabold max-950:text-5xl max-950:mb-10"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          My Expertise
        </motion.p>
        <div className="expertiseSubContainer flex justify-center items-center flex-wrap m-10 max-950:w-[90%]">
          <motion.div
            className="box border-2 border-solid border-white w-96 p-10 pl-8 pr-8 overflow-hidden max-w-[400px] max-950:w-full max-950:mb-7 max-950:p-5 max-950:pt-7 max-950:m-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ once: true, duration: 0.3 }}
          >
            <div className="flex gap-5">
              <MdDevices />
              <p className="text-3xl mb-5 font-extrabold header max-950:text-2xl">
                Software Development
              </p>
            </div>
            <div className="">
              <span className="text-[#636668] max-950:text-sm">&lt;h3&gt;</span>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ once: true, duration: 0.3 }}
                className=" text-wrap  subHeader border-l-2 font-normal border-solid border-[#636668] pl-4 ml-4 mt-2 mb-2 max-950:text-sm max-950:pl-6 "
              >
                Experienced in developing both front & back end technologies.
                JavaScript, NodeJs, ExpressJs
              </motion.p>
              <span className="text-[#636668] max-950:text-sm">
                &lt;/h3 &gt;
              </span>
            </div>
          </motion.div>
          {/* 1 */}
          <motion.div
            className="box border-2 border-solid border-white w-96 p-10 pl-8 pr-8 overflow-hidden  max-w-[400px] max-950:w-full  max-950:mb-7 max-950:pt-7  max-950:p-5 max-950:m-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ once: true, duration: 0.4 }}
          >
            <div className="flex gap-5">
              <SiJavascript />
              <p className="text-3xl mb-5 font-extrabold header  max-950:text-2xl">
                Frontend Dev JavaScript,React
              </p>
            </div>
            <div className="">
              <span className="text-[#636668] max-950:text-sm">&lt;h3&gt;</span>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ once: true, duration: 0.4 }}
                className=" text-wrap  subHeader border-l-2 font-normal border-solid  border-[#636668] pl-4 ml-4 mt-2 mb-2 max-950:text-sm max-950:pl-6 "
              >
                Passionate about UI with 2+ years of experience in HTML, CSS,
                JS, jQuery, React, and Next.js.
              </motion.p>
              <span className="text-[#636668] max-950:text-sm ">
                &lt;/h3&gt;
              </span>
            </div>
          </motion.div>
          {/* 2 */}
          <motion.div
            className="box border-2 border-solid border-white w-96 p-10 pl-8 pr-8 overflow-hidden  max-w-[400px] max-950:w-full  max-950:mb-7 max-950:p-5 max-950:pt-7  max-950:m-2"
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ once: true, duration: 0.5 }}
          >
            <div className="flex gap-3 items-center mb-8">
              <AiOutlineCloud />
              <p className="text-4xl  font-extrabold header p-2max-950:text-3xl ">
                DevOps
              </p>
            </div>
            <div className="">
              <span className="text-[#636668] max-950:text-sm">&lt;h3&gt;</span>
              <motion.p
                className=" text-wrap  subHeader border-l-2 font-normal border-solid  border-[#636668] pl-4 ml-4 mt-2 mb-2 max-950:text-sm max-950:pl-6 "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ once: true, duration: 0.5 }}
              >
                Hands-on experience with GCP and Azure, specializing in Docker,
                Linux, automation, and networking
              </motion.p>
              <span className="text-[#636668] max-950:text-sm">
                &lt;/h3 &gt;
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function MdDevices(props) {
  return (
    <svg
      className="text-7xl"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
    </svg>
  );
}

function SiJavascript(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      role="img"
      viewBox="0 0 24 24"
      height="4em"
      width="4em"
      {...props}
    >
      <title />
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  );
}

function AiOutlineCloud(props) {
  return (
    <svg
      className="text-6xl"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 0 1-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 0 1 140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0 1 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z" />
    </svg>
  );
}
