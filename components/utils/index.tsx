import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ZStack: React.FC<any> = ({ children, className, ...rest }) => (
    <section className={cn("grid grid-cols-1 grid-rows-1", className)} {...rest}>
      {(Array.isArray(children) ? children : [children])?.map(
        (elem: React.ReactNode, i: number) => {
          return (
          <div
            key={i}
            style={{ zIndex: i }}
            className={"col-start-1 row-start-1 col-span-1 row-span-1"}
          >
            {elem}
          </div>
        )}
      )}
    </section>
  );
  
  export const Guides: React.FC = () => (
    <div className="flex flex-row w-full h-full justify-between">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-[1px] h-full bg-[var(--grid-color)]" />
      ))}
    </div>
  );