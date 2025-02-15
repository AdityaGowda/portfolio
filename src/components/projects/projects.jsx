import Card from "../card/card";
import test from "@/components/icons/test.png";
import * as image from "@/components/icons/getIcon";

export default function Projects() {
  const techImages = image.default;
  let techImageCard1 = [techImages.react, techImages.azure];
  return (
    <section className="p-20">
      <div className="flex justify-center items-center gap-16 mb-16">
        <Card
          mainImage={test}
          title={"hidind"}
          description={"description"}
          tech={techImageCard1}
          telegram={techImages.telegram}
        />
        <Card
          mainImage={test}
          title={"hidind"}
          description={"description"}
          tech={techImageCard1}
          telegram={techImages.telegram}
        />
      </div>
      <div className="flex justify-center items-center gap-16">
        <Card
          mainImage={test}
          title={"hidind"}
          description={"description"}
          tech={techImageCard1}
          telegram={techImages.telegram}
        />
        <Card
          mainImage={test}
          title={"hidind"}
          description={"description"}
          tech={techImageCard1}
        />
      </div>
    </section>
  );
}
