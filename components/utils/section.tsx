import { Guides, ZStack } from "@/components/utils";

export default function Section({
  contained = true,
  guides = true,
  ...restProps
}: {
  children: React.ReactNode;
  sectionProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > & { "data-theme"?: string };
  beforeGuides?: React.ReactNode;
  contained?: boolean;
  guides?: boolean;
}) {
  return (
    <ZStack {...restProps.sectionProps}>
      {/* BEHIND GUIDELINES */}
      {restProps.beforeGuides ?? <></>}

      {/* GUIDELINES */}
      {guides ? (
        <div className="w-full h-full m-auto max-w-6xl px-2">
          <Guides />
        </div>
      ) : (
        <></>
      )}

      {/* ABOVE GUIDELINES */}
      {contained ? (
        <div className="w-full h-full m-auto max-w-6xl px-2">
          {restProps.children}
        </div>
      ) : (
        restProps.children
      )}
    </ZStack>
  );
}