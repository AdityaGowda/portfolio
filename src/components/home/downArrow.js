import Image from "next/image";
import downArrow from "@/components/icons/downArrow.gif";

export function DownArrow() {
  return (
    <div>
      <Image src={downArrow} alt="downArrow" width="70" height="70" />
    </div>
  );
}
