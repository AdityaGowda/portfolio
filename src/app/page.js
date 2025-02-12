import Canvas from "@/components/canvas";
import { DownArrow } from "@/components/downArrow";
import NameBanner from "@/components/name";
import NavBar from "@/components/navBar";

export default function Page() {
  return (
    <>
      <section className="flex flex-col justify-between p-10 items-center h-screen">
        <NavBar />
        <NameBanner />
        <DownArrow />
        <Canvas />
      </section>
    </>
  );
}
