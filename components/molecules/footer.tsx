import { Text } from "@/components/atoms/text";
import Link from "next/link";
import Section from "@/components/utils/section";

export const Footer = () => (
  <>
<Section contained={false}>
  <footer className="bg-white border-t border-t-[var(--grid-color)]">
    <div className="w-full h-full m-auto max-w-6xl px-2 grid grid-cols-1 md:grid-cols-2 gap-y-16 py-10">
      <div>
        <Text as="p" font="expanded" scale="h7" className="ml-4 uppercase">Punit Valves</Text>
      </div>
      <div className="grid grid-cols-2 gap-y-16 px-4">
        <div className="flex flex-col">
          <ul className="flex flex-col font-bold tracking-[-0.04em] text-sm leading-[1.0] *:py-2">
            {QUICK_LINKS.map((o, i) => (
              <Link className="not-first:opacity-50 not-first:font-medium" key={i} href={o.href ?? "/"}>
                {o.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col font-bold tracking-[-0.04em] text-sm leading-[1.0] *:py-2">
            {SOCIALS.map((o, i) => (
              <Link className="not-first:opacity-50 not-first:font-medium" key={i} href={o.href ?? "/"}>
                {o.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col font-bold tracking-[-0.04em] text-sm leading-[1.0] *:py-2">
            {RESOURCES.map((o, i) => (
              <Link className="not-first:opacity-50 not-first:font-medium" key={i} href={o.href ?? "/"}>
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
    <div className="bg-white border-t border-t-[var(--grid-color)] w-full">
      <div className="m-auto max-w-6xl flex flex-col md:flex-row justify-between py-8 px-4">
            <Text as="p" scale="p3" font="inter" className="leading-[200%] tracking-normal text-[var(--secondary-color)]">©2025 <span className="font-semibold text-black">Miracle Enterprise</span>, All Rights Reserved.</Text>
            <Text as="p" scale="p3" font="inter" className="leading-[200%] tracking-normal text-[var(--secondary-color)]">Designed and Developed by <Link href="https://www.honeyhexa.com" className="underline text-blue-500">Honey Hexa</Link></Text>
      </div>
    </div>
</Section>
  </>


);

const QUICK_LINKS = [
  { label: "QUICK LINKS" },
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "SOCIALS" },
  { label: "Facebook", href: "/" },
  { label: "Instagram", href: "/" },
  { label: "Youtube", href: "/" },
  { label: "X (Twitter)", href: "/" },
];

const RESOURCES = [
  { label: "RESOUCES" },
  { label: "Blog", href: "/blog" },
  { label: "Brochure", href: "/" },
];