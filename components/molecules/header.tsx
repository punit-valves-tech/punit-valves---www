import Link from "next/link";
import { Button } from "../atoms/button";
import { Text } from "../atoms/text";

export const Header = () => (
    <header className="z-[10] drop-shadow-xl md:drop-shadow-none top-0 sticky bg-white/80 backdrop-blur-xl h-20 w-full border-b border-b-[var(--grid-color)]">
        <div className="w-full h-full m-auto max-w-6xl px-2 flex flex-row justify-between items-center">
            <Link href="/">
            <Text as="p" font="expanded" scale="h7" className="ml-4 uppercase">Punit Valves</Text>
            </Link>
            {/* <div>NAVIGATION</div> */}
            <div className="hidden md:block"><Button type="primary">GET A QUOTE</Button></div>
        </div>
    </header>
);