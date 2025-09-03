import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TypographyH2, TypographyLarge, TypographyLead } from "@/components/ui/typography";

export function CommunitySpotlight() {
	return (
			<section className="bg-gray-100 py-20">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<TypographyH2 className="text-4xl lg:text-5xl text-gray-900 leading-tight border-0 pb-0 font-medium">
								Meet the Co-creators
							</TypographyH2>
							<TypographyLead className="text-gray-600 max-w-md">
								Many of us worked on this plan together. Meet the people who helped make it happen.
							</TypographyLead>
							<Button className="bg-emerald-700 hover:bg-emerald-900 text-white cursor-pointer">
								See all co-creators →
							</Button>
						</div>
	
						<div className="relative h-[300px] lg:h-[400px]">
						</div>
					</div>
				</div>
			</section>
		);
}
