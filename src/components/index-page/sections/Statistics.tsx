import { TypographyH1, TypographyLarge, TypographyLead } from "@/components/ui/typography";

export function Statistics() {
	return (
		<section className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-4">
				<TypographyLarge className="text-4xl text-gray-600 mb-4 font-light">
          			Monthly updates for Waterloo Region
        		</TypographyLarge>
        		<TypographyH1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
          			Total people housed for
        		</TypographyH1>
        		<TypographyH1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
          			July 2025
        		</TypographyH1>
        		<TypographyLead className="text-gray-900">
          			Chronic homelessness is defined as being homeless for over 6 months
        		</TypographyLead>
			</div>
		</section>
	);
}
