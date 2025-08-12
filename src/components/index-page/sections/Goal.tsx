import { Button } from "@/components/ui/button";
import ApartmentWithMagnifyGlass from "@/components/Images/ApartmentWithMagnifyGlass.svg";
import {
  TypographyH2,
  TypographyH1,
  TypographyLarge,
  TypographyLead,
} from "@/components/ui/typography";

export function Goal() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 layout">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-8">
            <TypographyH1 className="text-left font-normal text-gray-600 mb-4">
              Our goal
            </TypographyH1>
            <TypographyH2 className="text-center text-4xl lg:text-5xl text-gray-900 leading-tight border-0 pb-0">
              Help us reach functional zero by 2030
            </TypographyH2>
            <TypographyLead className="text-gray-600 text-center">
              Together with our community partners, we have a plan to end
              chronic homelessness in the Region of Waterloo.
            </TypographyLead>
            <div className="text-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Learn about The Plan →
              </Button>
            </div>
          </div>
          <div className="col-start-2 relative h-[300px] lg:h-[400px] flex justify-center items-center [@media(max-width:600px)]:hidden">
            <ApartmentWithMagnifyGlass />
          </div>
        </div>
      </div>
    </section>
  );
}
