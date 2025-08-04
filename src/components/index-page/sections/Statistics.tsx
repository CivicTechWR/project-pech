import {
  TypographyH1,
  TypographyLarge,
  TypographyLead,
} from "@/components/ui/typography";

export function Statistics() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 layout">
        <TypographyH1 className="font-normal text-gray-600 mb-4">
          In Waterloo Region
        </TypographyH1>
        <TypographyH1 className="text-[50px] lg:text-[56px] font-bold text-gray-900 mb-6 leading-tight">
          257 people are experiencing chronic homelessness
        </TypographyH1>
        <TypographyLead className="text-gray-600 max-w-3xl">
          Chronic homelessness is defined as being homeless for over 6 months.
        </TypographyLead>
      </div>
    </section>
  );
}
