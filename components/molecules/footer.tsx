import { Text } from "@/components/atoms/text";
import Link from "next/link";
import Section from "@/components/utils/section";
import Image from "next/image";

export const Footer = () => (
  <>
    <Section contained={false}>
      <footer className="bg-white border-t border-t-[var(--grid-color)]">
        <div className="w-full h-full m-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-y-16 py-10 pb-56">
          <div className="flex flex-col gap-8">
            <Link className="" href="/">
              <Image
                width="401"
                height="158"
                className="h-16 w-auto py-1"
                src="/logo-punit.png"
                alt="Punit Valves Logo"
              />
            </Link>
            {/* <Image
              className="px-1 w-72"
              width="5732"
              height="365"
              alt=""
              src="/miracle.png"
            /> */}
            {/* <Image
            className="px-1 w-72"
            width="4752"
            height="447"
            alt=""
            src="/miracle-02.png"
          /> */}
          </div>
          <div className="grid grid-cols-2 gap-y-16 px-4">
            <div className="flex flex-col">
              <ul className="flex flex-col font-bold text-sm leading-[1.0] *:py-2">
                {QUICK_LINKS.map((o, i) => (
                  <Link
                    className="not-first:opacity-50 not-first:font-medium not-first:hover:opacity-100 not-first:hover:underline hover:underline-offset-2"
                    key={i}
                    href={o.href ?? "/"}
                  >
                    {o.label}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="flex flex-col font-bold text-sm leading-[1.0] *:py-2">
                {SOCIALS.map((o, i) => (
                  <Link
                    className="not-first:opacity-50 not-first:font-medium not-first:hover:opacity-100 not-first:hover:underline hover:underline-offset-2"
                    key={i}
                    href={o.href ?? "/"}
                  >
                    {o.label}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="flex flex-col font-bold text-sm leading-[1.0] *:py-2">
                {RESOURCES.map((o, i) => (
                  <Link
                    className="not-first:opacity-50 not-first:font-medium not-first:hover:opacity-100 not-first:hover:underline hover:underline-offset-2"
                    key={i}
                    href={o.href ?? ""}
                  >
                    {o.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Section>
    <Section contained={false}>
      <div className="bg-white border-y border-y-[var(--grid-color)] w-full">
        {/* <div className="absolute z-[-10] w-full h-0 flex flex-col items-center"> */}
          {/* <Image
            className="m-auto px-4 max-w-6xl w-full -translate-y-14"
            width="5732"
            height="365"
            alt=""
            src="/miracle.png"
          /> */}
          {/* <Image
            className="m-auto px-4 max-w-6xl w-full -translate-y-20"
            width="4752"
            height="447"
            alt=""
            src="/miracle-02.png"
          /> */}
        {/* </div> */}
        <div className="m-auto max-w-6xl flex flex-col md:flex-row justify-between py-8 px-4">
          <Text
            as="p"
            scale="p3"
            font="inter"
            className="leading-[200%] tracking-normal text-[var(--secondary-color)]"
          >
            ©2025{" "}
            <span className="font-semibold text-black">Miracle Enterprise</span>
            , All Rights Reserved.
          </Text>
          <Text
            as="p"
            scale="p3"
            font="inter"
            className="leading-[200%] tracking-normal text-[var(--secondary-color)]"
          >
            Designed and Developed by{" "}
            <Link
              href="https://www.honeyhexa.com"
              className="underline underline-offset-2 font-semibold text-blue-500"
            >
              Honey Hexa
            </Link>
          </Text>
        </div>
      </div>
    </Section>
  </>
);

const QUICK_LINKS = [
  { label: "QUICK LINKS" },
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "SOCIALS" },
  // { label: "Facebook", href: "/" },
  // { label: "Instagram", href: "/" },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCCyo4GQzDu1dnjXD-GwdZCQ",
  },
  // { label: "X (Twitter)", href: "/" },
];

const RESOURCES = [
  { label: "RESOURCES" },
  { label: "Blog", href: "/blog" },
  { label: "Brochure", href: "/brochure" },
  { label: "Dictionary", href: "/dictionary" },
];
