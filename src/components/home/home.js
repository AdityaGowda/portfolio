import React from "react";
import Canvas from "./canvas";
import { DownArrow } from "./downArrow";
import NameBanner from "./name";
import NavBar from "./navBar";

export default function Home() {
  return (
    <section className="homePage pb-32 pl-5 pr-5">
      <div className="flex flex-col justify-between pt-12 pb-12 items-center h-screen ">
        <NavBar />
        <NameBanner />
        <DownArrow />
        <Canvas />
      </div>
    </section>
  );
}
