import gabel from "@/assets/besteck-gabel.png";
import loeffel from "@/assets/besteck-loeffel.png";
import messer from "@/assets/besteck-messer.png";

export function BesteckAnimation() {
  return (
    <div
      className="pointer-events-none relative mx-auto mt-6 h-32 w-full max-w-md select-none sm:mt-8 sm:h-36"
      aria-hidden="true"
    >
      <img
        src={loeffel}
        alt=""
        className="besteck besteck-loeffel absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={messer}
        alt=""
        className="besteck besteck-messer absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={gabel}
        alt=""
        className="besteck besteck-gabel absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
