"use client";

import { MapPin } from "lucide-react";
import { BuildingIllustration } from "@/components/BuildingIllustration";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	TypographyH1,
	TypographyLead,
	TypographySmall,
} from "@/components/ui/typography";

export function Hero() {
	return (
		<section className="relative bg-gray-700 pt-24 pb-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<TypographyH1 className="text-5xl lg:text-6xl font-semibold text-white leading-tight">
              				The Plan
            			</TypographyH1>
            			<TypographyH1 className="relative text-5xl lg:text-6xl font-normal text-white leading-tight">
              				to End Chronic
              				<br />
              				Homelessness
            			</TypographyH1>
						<TypographyLead className="text-white max-w-md font-light">
							A collaborative roadmap for strategies, resources and timelines to
							end chronic homelessness in Waterloo Region
						</TypographyLead>

					</div>

					<div className="relative h-[400px] lg:h-[500px]">
						<BuildingIllustration variant="hero" className="opacity-80" />
					</div>
				</div>
			</div>
		</section>
	);
}
