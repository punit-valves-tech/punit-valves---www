/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";

const buttonVariants = cva("", {
  variants: {
    type: {
      primary: "bg-[var(--primary-color)] text-white hover:drop-shadow-red-700",
      secondary: "bg-white text-black border border-black border-1",
    },
  },
});

export const Button = ({
  type = "secondary",
  className,
  children,
  href,
  ...props
}: any) => {
  const clsx = cn(
    buttonVariants({ type }),
    "text-nowrap ellipsis transition ease-in-out drop-shadow-md/20 hover:drop-shadow-xl/20 px-4 flex flex-row items-center justify-between h-10 text-xs font-(family-name:--font-archivo)",
    className
  );
  return href ? (
    <Link href={href} className={clsx} {...props}>
      {children}
    </Link>
  ) : (
    <button className={clsx} {...props}>
      {children}
    </button>
  );
};
