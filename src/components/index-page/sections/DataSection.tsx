import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp } from "lucide-react";
import DollarSign from "@/components/Images/DollarSign.svg";
import ArrowStockUp from "@/components/Images/ArrowStockUp.svg";
import SingleHouse from "@/components/Images/SingleHouse.svg";
import {
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
        <TypographyH2 className="text-3xl lg:text-4xl text-white mb-12 text-center border-0 pb-0">
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

        <div className="bg-zinc-800 rounded-lg p-8 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-6xl text-gray-600">&quot;</span>
            <div className="space-y-4">
              <TypographyBlockquote className="text-xl text-gray-300 border-0">
                Some guy beat me up on the street. Yeah, I was in the hospital
                because of it... I died a few times... Meantime my landlord, he
                got rid of everything in my apartment and I lost my rent-geared
                to income housing and I ended up discharged from the hospital
                and driven to the shelter.
              </TypographyBlockquote>
              <TypographyMuted className="text-gray-500">
                — Project Willow Interview Participant
              </TypographyMuted>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <TypographyH3 className="text-2xl text-white">
              There&apos;s a real life story behind the numbers
            </TypographyH3>
          </div>
          <Button
            variant="link"
            className="text-purple-400 hover:text-purple-300"
          >
            View Data & Trends →
          </Button>
        </div>
      </div>
    </section>
  );
}
