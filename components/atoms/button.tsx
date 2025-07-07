import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";

const buttonVariants = cva("", {
    variants: {
        type: {
            primary: "bg-[var(--primary-color)] text-white",
            secondary: "bg-white text-black border border-black border-1",
        }
    }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = ({ type = "secondary", className, children }: any) => (

    <div className={cn(buttonVariants({ type }), "text-nowrap ellipsis drop-shadow-xl px-4 flex flex-row items-center justify-between h-10 text-xs font-(family-name:--font-archivo)", className)}>
        {children ?? "DOWNLOAD BROCHURE"} <ArrowRightIcon className="h-4 -mr-2 item-end" />
    </div>
)