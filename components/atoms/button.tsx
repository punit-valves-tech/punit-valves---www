import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva("", {
    variants: {
        type: {
            primary: "bg-[var(--primary-color)] text-white",
            secondary: "bg-white text-black border border-black border-2",
        }
    }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = ({ type }: any) => (

    <div className={cn(buttonVariants({ type }), "drop-shadow-xl px-4 flex flex-row items-center justify-between h-10 text-xs font-(family-name:--font-archivo)")}>
        DOWNLOAD BROCHURE
    </div>
)