/* eslint-disable @typescript-eslint/no-explicit-any */
import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


const textVariants = cva("", {
  variants: {
    font: {
        expanded: "font-(family-name:--font-expanded)",
        inter: "font-(family-name:--font-inter)",
        "ibm-plex": "font-(family-name:--font-ibm-plex)",
        archivo: "font-(family-name:--font-archivo)",
    },
    scale: {
        h1: "tracking-tight text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
        h2: "tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl ",
        h3: "tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl ",
        h4: "tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl ",
        h5: "tracking-tight text-2xl md:text-3xl lg:text-4xl xl:text-4xl ",
        h6: "tracking-tight text-xl md:text-2xl lg:text-3xl xl:text-3xl ",
        h7: "tracking-tight text-lg md:text-xl lg:text-2xl xl:text-2xl ",
        h8: "tracking-tight text-lg md:text-lg lg:text-xl xl:text-xl",
        h9: "tracking-tight text-base md:text-base lg:text-lg xl:text-lg",
        p1: "tracking-tight text-base",
        p2: "tracking-tight text-sm",
        p3: "tracking-tight text-xs",
    },
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

// Define the type for the props of the component.
// interface TextProps
//   extends TextVariants,
//     React.HTMLAttributes<HTMLSpanElement> {
//   as?: React.ElementType; // Allows customization of which HTML tag is rendered (e.g., span, p, div).
//   children?: React.ReactNode;
//   className?: string;
// }

export const Text: React.FC<any> = ({
  as: Component = "span",
  font,
  scale,
  className,
  children,
  ...rest
}) => {
  return (
    <Component
      className={twMerge(textVariants({ font, scale, className }))}
      {...rest}
    >
      {children}
    </Component>
  );
};