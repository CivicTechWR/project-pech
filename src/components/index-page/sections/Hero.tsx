"use client";

import ThreeHouses from "@/components/Images/ThreeTownHouses.svg";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { TownHall } from "./TownHall";

export function Hero() {
  return (
    <section className="relative bg-zinc-900 pt-24 pb-20">
      <div className="max-w-7xl layout">
        <div className="grid lg:grid-cols-2  lg:gap-25 items-center">
          <div className="space-y-6 min-w-0">
            <TypographyH1 className="min-w-0 md:text-5xl lg:text-6xl text-white leading-tight">
              The Plan
              <br />
              to End Chronic
              <br />
              Homelessness
            </TypographyH1>
            <TypographyLead className="text-gray-400">
              A collaborative roadmap for strategies, resources and timelines to
              end chronic homelessness in Waterloo Region
            </TypographyLead>
          </div>
          <div className="col-start-2 relative w-full max-w-[480px] h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center hidden lg:block">
            <ThreeHouses className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
