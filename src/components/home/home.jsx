import Canvas from "./canvas";
import { DownArrow } from "./downArrow";
import NameBanner from "./name";
import NavBar from "./navBar";

export default function Home() {
  return (
    <section className="flex flex-col justify-between p-12 items-center h-screen">
      <NavBar />
      <NameBanner />
      <DownArrow />
      <Canvas />
    </section>
  );
}
