import type { Metadata } from "next";
import FocusCard from "@/components/plan-page/FocusCard";
import Plan2025 from "@/components/plan-page/sections/Plan2025";
import PlanHowYouCanHelp from "@/components/plan-page/sections/PlanHowYouCanHelp";
import PlanLookingAhead from "@/components/plan-page/sections/PlanLookingAhead";
import { Container } from "../../components/ui/container";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";
import { cn } from "../../lib/utils";
import { focusCards } from "./focus-cards";
import { HeroIllustration } from "./hero-illustration";

export const metadata: Metadata = {
	title: "Plan to End Chronic Homelessness Waterloo Region 2030",
	description:
    "Waterloo Region’s roadmap to reach functional zero by 2030 with clear focus areas, priority actions, and community-led solutions to end homelessness.",
};

export default function PlanPage() {
	return (
		<>
			<main className="bg-brand-black text-brand-white py-10 md:py-0">
				<Container
					size="6xl"
					className={cn(
						// "py-16",
						"grid grid-cols-1 md:grid-cols-2",
						"items-center justify-center",
					)}
				>
					<div className="flex flex-col gap-8">
						<Heading
							size="2xl"
						>
							The Plan
						</Heading>
						<Text size="xl">
							The Plan to End Chronic Homelessness is Waterloo Region’s roadmap to make sure everyone has a safe, stable home. It was created with input from people with lived experience, service providers, community groups, and local government.
						</Text>
					</div>
					<HeroIllustration
						className={cn(
							"md:mt-20 md:w-150 md:h-124",
							"w-72 h-72",
						)}
					/>
				</Container>
			</main>
			<section
				className="bg-brand-white py-16"
			>
				<Container size="6xl" className="flex flex-col gap-8">
					<Heading
						size="lg"
						className="text-brand-dark-green text-left"
					>
						Our focus areas
					</Heading>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{focusCards.map(card => (
							<FocusCard key={card.id} data={card} />
						))}
					</div>
				</Container>
			</section>
			<section
				className="bg-brand-black text-brand-white"
			>
				<Container
					size="6xl"
					className="py-24 flex flex-col gap-16"
				>
					<div className="flex flex-col gap-4">
						<Heading size="lg" as="h3">
							Pushing for big change together
						</Heading>
						<Text size="xl">
							Lasting change takes teamwork at every level: local, regional, provincial, and national. By joining forces, we can make a bigger impact.
						</Text>
					</div>
					<div className="flex flex-col md:gap-8">
						<Heading size="md" as="h4">
							What we’re doing in 2025
						</Heading>
						<Plan2025 />
					</div>
				</Container>
			</section>
			<PlanLookingAhead />
			<PlanHowYouCanHelp />
		</>
	);
}
