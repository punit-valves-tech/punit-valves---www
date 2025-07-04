import { Text } from "@/components/atoms/text";
import { TallyForm } from "@/components/molecules/tally-form";
import { Page } from "@/components/organisms/page";
import Section from "@/components/utils/section";

export default function Home() {
  return (
    <Page>
      <Section>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex-grow min-h-20"></div>
              <div className="px-4">
      
                <Text as="h1" scale="h4" font="expanded" className="-ml-0.5 mt-2 uppercase">GET IN <span className="text-[var(--primary-color)]">TOUCH</span></Text>
                
                <Text as="p" scale="p1" font="expanded" className=" mt-12">ADDRESS</Text>
                <Text as="p" scale="p1" font="ibm-plex" className=" mt-1">PUNIT Compound, Gandevi Road, Devsar,<br/> Bilimora - 396321. Gujarat, India.</Text>

                <Text as="p" scale="p1" font="expanded" className=" mt-12">PHONE</Text>
                <Text as="p" scale="p1" font="ibm-plex" className=" mt-1">Mihir Panchal - +91 95588 17397<br/>Kantilal Panchal - +91 92281 27589</Text>

                <Text as="p" scale="p1" font="expanded" className=" mt-12">EMAIL</Text>
                <Text as="p" scale="p1" font="ibm-plex" className=" mt-1">miracle.epts@gmail.com</Text>
              </div>
              <div className="flex-grow min-h-20"></div>
            </div>
            <div className="aspect-square m-2 border border-[var(--grid-color)] bg-white overflow-hidde px-4 flex justify-center items-center flex-col">
              <TallyForm />
            </div>
          </div>
        </Section>
    </Page>
  );
}
