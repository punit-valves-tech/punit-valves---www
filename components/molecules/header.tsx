import Link from "next/link";
import { Button } from "../atoms/button";
import Image from "next/image";

export const Header = () => (
  <header className="z-[10] drop-shadow-xl md:drop-shadow-none top-0 sticky bg-white/80 backdrop-blur-xl h-20 w-full border-b border-b-[var(--grid-color)]">
    <div className="w-full h-full m-auto max-w-6xl px-4 flex flex-row justify-between items-center">
      <Link className="h-12" href="/">
        <Image
          width="300"
          height="100"
          className="h-full w-full"
          src="/LOGO_PUNIT.png"
          alt="Punit Valves Logo"
        />
      </Link>
      {/* <div>NAVIGATION</div> */}
      <div className="hidden md:block">
        <Button type="primary">GET A QUOTE</Button>
      </div>
    </div>
  </header>
);
