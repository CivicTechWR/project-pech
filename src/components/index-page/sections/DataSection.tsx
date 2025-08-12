import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp } from "lucide-react";
import DollarSign from "@/components/Images/DollarSign.svg";
import ArrowStockUp from "@/components/Images/ArrowStockUp.svg";
import SingleHouse from "@/components/Images/SingleHouse.svg";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLarge,
  TypographyMuted,
  TypographyBlockquote,
} from "@/components/ui/typography";

export function DataSection() {
  return (
    <section id="data-trends" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 layout">
        <TypographyH2 className="text-white mb-12 text-4xl font-bold-none border-0 pb-8">
          What&apos;s the data behind chronic homelessness?
        </TypographyH2>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="p-4 flex items-center h-full">
            <TypographyH3 className="text-3xl text-PECH-PURPLE">
              The average person cannot affordably pay for housing in the region
            </TypographyH3>
          </div>
          <div className="grid gap-2 text-center place-items-center">
            <div>
              <DollarSign className="lg:h-[150px]" />
            </div>
            <TypographyMuted className="text-gray-400 mt-6 mb-2">
              Average housing income
            </TypographyMuted>
            <TypographyLarge className="text-3xl text-white">
              $108,500
            </TypographyLarge>
          </div>

          <div className="grid gap-2 text-center place-items-center">
            <div>
              <SingleHouse className="lg:h-[150px]" />
            </div>
            <TypographyMuted className="text-gray-400 mt-6 mb-2">
              Average house price
            </TypographyMuted>
            <TypographyLarge className="text-3xl text-white">
              $619,323
            </TypographyLarge>
          </div>

          <div className="grid gap-2 text-center place-items-center">
            <div>
              <ArrowStockUp className="lg:h-[150px]" />
            </div>
            <TypographyMuted className="text-gray-400 mt-6 mb-2">
              Household income required
            </TypographyMuted>
            <TypographyLarge className="text-3xl text-white">
              $140,919
            </TypographyLarge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="-lg h-full flex items-start col-span-2">
            <span className="text-6xl text-white">&quot;</span>
            <div className="space-y-4">
              <TypographyBlockquote className="text-2xl border-0 pl-2">
                Some guy beat me up on the street. Yeah, I was in the hospital
                because of it... I died a few times... Meantime my landlord, he
                got rid of everything in my apartment and I lost my rent-geared
                to income housing and I ended up discharged from the hospital
                and driven to the shelter.
                <span className="pl-2 text-gray-400 not-italic">
                  — Project Willow Interview Participant
                </span>
              </TypographyBlockquote>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full p-8 col-span-1">
            <div className="space-y-2 mb-4">
              <TypographyH2 className="text-3xl border-none text-PECH-PURPLE">
                There&apos;s a real life story behind the numbers
              </TypographyH2>
            </div>
            <Button
              variant="default"
              size={"lg"}
              className="bg-white hover:bg-gray-200 text-PECH-PURPLE hover:text-PECH-PURPLE-HOVER self-start"
            >
              View Data & Trends →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
