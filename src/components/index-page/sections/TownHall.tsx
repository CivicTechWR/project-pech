"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  TypographySmall,
  TypographyMedium,
  TypographyH2,
  TypographyLarge,
} from "@/components/ui/typography";

export function TownHall() {
  return (
    <section className="bg-PECH-GRAY py-20">
      <div className="max-w-7xl layout">
        <Card className="grid bg-white px-4 gap-4 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-PECH-GRAY border-zinc-700">
          {/* This is the first column. It holds the CardHeader and the other details. */}
          <div className="space-y-8 min-w-0 px-8 pr-8 py-8">
            <CardHeader className="px-0">
              <TypographyH2 className="text-PECH-BLACK pb-0">
                Our next town hall meeting
              </TypographyH2>
              <TypographySmall className="text-gray-600 font-light">
                Join us to share ideas and ask questions
              </TypographySmall>
            </CardHeader>
            <CardContent className="space-y-8 px-0 pb-4">
              <div className="flex gap-2 flex-col [@media(min-width:550px)]:flex-row">
                <Badge className="flex-1 min-w-[110px] px-6 pt-2 pb-2 bg-PECH-DARK-GREEN text-white whitespace-nowrap">
                  <TypographyLarge className="md:text-base font-light">
                    July 10, 2025
                  </TypographyLarge>
                </Badge>
                <Badge className="flex-1 min-w-[90px] pt-2 pb-2 bg-PECH-DARK-GREEN text-white whitespace-nowrap">
                  <TypographyLarge className="md:text-base font-light">
                    11:30 AM
                  </TypographyLarge>
                </Badge>
                <div className="inline-flex items-center gap-2 text-black ">
                  <MapPin />
                  <TypographyMedium>
                    <div className="font-semibold pb-0.5">
                      Waterloo City Hall
                    </div>
                    <div className="font-light">100 Regina St. S, Waterloo</div>
                  </TypographyMedium>
                </div>
              </div>
            </CardContent>
          </div>
          {/* This is the second column. It holds the sign-up section. */}
          <CardContent className="space-y-8 md:pl-8 py-8">
            <div className="flex flex-col space-y-2">
              <TypographyH2 className="pb-0 text-gray-600 font-light">
                Sign up for our newsletter:
              </TypographyH2>
              <div className="flex flex-col gap-2">
                <TypographySmall className="text-gray-600 font-light">
                  Enter your email to get meeting details, and important PECH
                  updates.
                </TypographySmall>
                <Input
                  type="email"
                  placeholder="Enter your email to get meeting details and zoom link"
                  className="bg-zinc-700 border-zinc-300 text-white placeholder:text-gray-500"
                />
              </div>
              <Button className="w-full bg-PECH-GRAY hover:bg-zinc-700 text-white">
                Sign up
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
