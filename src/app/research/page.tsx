import Link from "next/link";
import { HumanIllustration } from "../../components/illustrations/human";
import { Container } from "../../components/ui/container";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";
import { ResearchHeaderCopyIllustration } from "./header-copy-illustration";

export default function ResearchPage() {
	return (
		<div className="min-h-screen">

			<section className="bg-brand-black text-white py-20">
				<Container size="6xl">
					<div className="grid lg:grid-cols-2 items-center">
						<div className="flex flex-col gap-4">
							<Heading size="2xl" className="font-semibold">
								The housing system is under strain
							</Heading>
							<Text size="xl">
								Our housing system is like a tower with missing blocks: it can't hold everyone up. As we face  more challenges, the whole structure becomes shaky.
							</Text>
						</div>
						<div className="flex justify-center">
							<ResearchHeaderCopyIllustration className="md:h-96 md:w-64 hidden md:block rounded-lg " />
						</div>
					</div>
				</Container>

			</section>
			<Container size="6xl" className="py-20">
				<div className="max-w-3xl flex flex-col gap-14">
					<section className="flex flex-col gap-8">
						<Heading as="h3" size="lg" className="text-brand-dark-green">
							We've Got Cracks in Our System
						</Heading>
						<Text size="lg" className="text-brand-grey">
							To make sure our system does not topple over, we have to build a better foundation that supports all of our needs. We’ve got cracks in our system.
						</Text>

					</section>
					<section className="flex flex-col gap-8">
						<Heading as="p" size="md" className="text-brand-grey">
							1 in 10 people in Waterloo Region face homelessness
						</Heading>
						<div className="flex gap-4">
							{[...Array.from({ length: 10 })].map((_, index) => (
								<HumanIllustration
									variant={index === 0 ? "brand-dark-green" : "brand-grey"}
									// eslint-disable-next-line react/no-array-index-key
									key={`human-${index}`}
								/>
							))}
						</div>
						<div className="flex flex-row gap-4">
							<div className="flex flex-row gap-2 items-center">
								<div className="h-4 w-4 rounded-full bg-brand-dark-green"></div>
								<Text size="md" className="text-brand-grey">
									Homelessness
								</Text>
							</div>
							<div className="flex flex-row gap-2 items-center">
								<div className="h-4 w-4 rounded-full bg-brand-grey"></div>
								<Text size="md" className="text-brand-grey">
									Non-homeless
								</Text>
							</div>
						</div>
						<Text size="md" className="text-brand-grey">
							Since 2020, chronic homelessness has grown by
							{" "}
							<strong>28%</strong>
							{" "}
							each year.
							{" "}
							<Link href="https://waterlooregion.org/sites/default/files/PECHKeyFindingsReport_DRAFT.pdf" className="text-brand-medium-green">LINK</Link>
						</Text>
						<Text size="md" className="text-brand-grey">
							On October 22, 2024,
							{" "}
							<strong>2,371 people</strong>
							{" "}
							were experiencing homelessness in Waterloo Region. With only
							{" "}
							<strong>301 shelter beds</strong>
							{" "}
							available, many had to live outside or sleep in cars.
							{" "}
							<Link
								href="https://www.regionofwaterloo.ca/en/living-here/resources/Housing-Services/137392-CS---PIT-Count-Infographic_Accessibility.pdf"
								className="text-brand-medium-green"
							>
								LINK
							</Link>
						</Text>
					</section>
					<section className="flex flex-col gap-8">
						<Heading as="p" size="md" className="text-brand-grey">
							The top 5 reasons people said caused their experience of homelessness
						</Heading>
						<div className="flex flex-col gap-4">
							<ul className="list-disc list-inside">
								<Text as="li" className="text-brand-grey" size="xl">
									They did not have enough income for housing
									{" "}
									{" "}
									<span className="text-brand-dark-green">(44%)</span>
								</Text>
								<Text as="li" className="text-brand-grey" size="xl">
									Had a conflict with their partner
									{" "}
									{" "}
									<span className="text-brand-dark-green">(18%)</span>
								</Text>
								<Text as="li" className="text-brand-grey" size="xl">
									Had a conflict with their landlord
									{" "}
									{" "}
									<span className="text-brand-dark-green">(13%)</span>
								</Text>
								<Text as="li" className="text-brand-grey" size="xl">
									Were stuck living in unfit and unsafe housing conditions
									{" "}
									{" "}
									<span className="text-brand-dark-green">(12%)</span>
								</Text>
								<Text as="li" className="text-brand-grey" size="xl">
									Substance use challenges
									{" "}
									{" "}
									<span className="text-brand-dark-green">(10%)</span>
								</Text>
							</ul>
						</div>
					</section>
					<section className="flex flex-col gap-8">
						<Heading as="p" size="md" className="text-brand-grey">
							Gender-based violence is a cause of almost half (45%) of family homelessness cases.
						</Heading>
						<Text size="xl" className="text-brand-grey">
							In local research, 83% of women said they stayed in an abusive housing situation because it felt safer than being unhoused. This is called hidden homelessness.
							{" "}
							<Link
								className="text-brand-medium-green"
								href="https://caeh.ca/wp-content/uploads/WH6-%E2%80%98Dont-Tell-People-Youre-Homeless-Experiences-of-Safety-Violence-and-Justice-among-Womens-Emergency-Shelter-Users.pdf"
							>
								[LINK]
							</Link>
						</Text>
						<Text size="xl" className="text-brand-grey">
							Youth on the margins: a region-wide survey in 2023, found that 13% of young people had experienced homelessness.
							{" "}
							<Link
								className="text-brand-medium-green"
								href="https://childrenandyouthplanningtable.ca/wp-content/uploads/2024/08/HOMELESSNESS-Snapshot-YOUTH-IMPACT-SURVEY-Fast-Facts-V2-FINAL.pdf"
							>
								[LINK]
							</Link>
						</Text>
					</section>
				</div>
			</Container>
		</div>
	);
}
