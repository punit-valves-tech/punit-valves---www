import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Page = ({ children }: any) => (
  <>
    <Header />
    <main>
      <CrossSection />
      {children}
    </main>
    <Footer />
  </>
);

const CrossSection = () => (
  <aside className="fixed z-[1] float-left top-16 bottom-0 left-[calc(50%_-_38rem_+_1px)] h-full w-10 bg-white cross-section border border-[var(--grid-color)]" />
);
