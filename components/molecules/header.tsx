import Link from "next/link";
import { Button } from "../atoms/button";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Text } from "../atoms/text";
import { Suspense } from "react";
import { Notification } from "./notification";

export const Header = () => (
  <header className="z-[10] drop-shadow-xl md:drop-shadow-none top-0 sticky bg-white/70 backdrop-blur-xl flex flex-col w-full border-b border-b-[var(--grid-color)]">
    <div className="w-full h-20 m-auto max-w-6xl px-4 flex flex-row justify-between items-center">
      <Link className="h-16 w-44" href="/">
        <Image
          width="401"
          height="158"
          className="h-full w-auto py-1"
          src="/logo-punit.png"
          alt="Punit Valves Logo"
        />
      </Link>
      <nav>
        <ul className="hidden md:flex md:flex-row">
          {NAV_ITEMS.map((o, i) => (
            <li key={i}>
              <Link className="px-8 py-4 cursor-pointer text-[var(--secondary-color)] hover:text-black" href={o.href}>
                <Text font="inter" scale="p2" className="tracking-normal font-bold uppercase">
                  {o.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block w-44">
        <Button href="/contact" type="primary">
          CONTACT
          <ArrowRightIcon className="ml-2 h-4 -mr-2 item-end" />
        </Button>
      </div>
    </div>
    <div className="w-full">
      <Suspense fallback={<></>}>
        <Notification />
      </Suspense>
    </div>
  </header>
);

const NAV_ITEMS = [
  { label: "PRODUCTS", href: "/products" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
  { label: "EVENTS", href: "/events" },
];
