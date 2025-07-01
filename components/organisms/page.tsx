import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Page = ({ children }: any) => (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
)