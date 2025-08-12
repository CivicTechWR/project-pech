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
      <div className="max-w-7xl mx-auto px-4 layout">
        <div className="grid lg:grid-cols-2 gap-25 items-center">
          <div className="space-y-8">
            <TypographyH1 className="text-5xl lg:text-6xl text-white leading-tight">
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

            <Card className="grid lg:grid-cols-2 bg-white divide-x-2 divide-gray-700 border-zinc-700">
              {/* This is the first column. It holds the CardHeader and the other details. */}
              <div className="space-y-4">
                <CardHeader className="">
                  <CardTitle className="text-black text-2xl">
                    Our next town hall meeting
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Badge className="flex-1 h-[38px] px-6 bg-PECH-PURPLE text-white">
                      <TypographyMedium className="font-light">
                        July 10, 2025
                      </TypographyMedium>
                    </Badge>
                    <Badge className="flex-1 bg-PECH-PURPLE  text-white">
                      <TypographyMedium className="font-light">
                        11:30 AM
                      </TypographyMedium>{" "}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-black ">
                    <MapPin className="flex-1 h-6 w-4" />
                    <TypographySmall>
                      <div className="font-semibold pb-0.5">
                        Waterloo City Hall
                      </div>
                      <div className="font-light">
                        100 Regina St. S, Waterloo
                      </div>
                    </TypographySmall>
                  </div>
                </CardContent>
              </div>
              {/* This is the second column. It holds the sign-up section. */}
              <CardContent className="space-y-4 px-0 pr-4">
                <div className="flex flex-col space-y-4">
                  <TypographyMedium className="text-gray-600">
                    Sign up for our newsletter:
                  </TypographyMedium>
                  <TypographySmall className="text-gray-600 font-light">
                    Enter your email to get meeting details, and important PECH
                    updates.
                  </TypographySmall>
                  <Input
                    type="email"
                    placeholder="Enter your email to get meeting details and zoom link"
                    className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-500"
                  />
                  <Button className="w-full bg-zinc-600 hover:bg-zinc-700 text-white">
                    Sign up
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-start-2 relative w-[400px] lg:w-[480px] h-[400px] lg:h-[500px] flex justify-center items-center [@media(max-width:600px)]:hidden">
            <ThreeHouses></ThreeHouses>
          </div>
        </div>
      </div>
    </section>
  );
}
