"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ThreeHouses from "@/components/Images/ThreeTownHouses.svg";
import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
  TypographySmall,
  TypographyMedium,
  TypographyP,
} from "@/components/ui/typography";

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

            <Card className="grid bg-white px-4 pr-8 divide-y-2 gap-4 divide-PECH-GRAY border-zinc-700">
              {/* This is the first column. It holds the CardHeader and the other details. */}
              <div className="space-y-4 min-w-0">
                <CardHeader className="px-0">
                  <CardTitle className="text-black text-2xl">
                    Our next town hall meeting
                  </CardTitle>
                  <TypographySmall className="text-gray-600 font-light">
                    Join us to share ideas and ask questions
                  </TypographySmall>
                </CardHeader>
                <CardContent className="space-y-4 px-0 pb-4">
                  <div className="flex gap-2 flex-col [@media(min-width:550px)]:flex-row">
                    <Badge className="flex-1 min-w-[110px] px-6 bg-PECH-PURPLE text-white whitespace-nowrap">
                      <TypographyMedium className="font-light">
                        July 10, 2025
                      </TypographyMedium>
                    </Badge>
                    <Badge className="flex-1 min-w-[90px] bg-PECH-PURPLE text-white whitespace-nowrap">
                      <TypographyMedium className="font-light">
                        11:30 AM
                      </TypographyMedium>
                    </Badge>
                    <div className="inline-flex items-center gap-2 text-black ">
                      <MapPin />
                      <TypographySmall>
                        <div className="font-semibold pb-0.5">
                          Waterloo City Hall
                        </div>
                        <div className="font-light">
                          100 Regina St. S, Waterloo
                        </div>
                      </TypographySmall>
                    </div>
                  </div>
                </CardContent>
              </div>
              {/* This is the second column. It holds the sign-up section. */}
              <CardContent className="space-y-4 px-0">
                <div className="flex flex-col space-y-2">
                  <TypographyMedium className="sm:text-sm text-gray-600">
                    Sign up for our newsletter:
                  </TypographyMedium>
                  <div className="flex flex-col gap-2">
                    <TypographySmall className="text-gray-600 font-light">
                      Enter your email to get meeting details, and important
                      PECH updates.
                    </TypographySmall>
                    <Input
                      type="email"
                      placeholder="Enter your email to get meeting details and zoom link"
                      className="bg-zinc-700 border-zinc-300 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <Button className="w-full bg-zinc-600 hover:bg-zinc-700 text-white">
                    Sign up
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-start-2 relative w-full max-w-[480px] h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center hidden lg:block">
            <ThreeHouses className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
