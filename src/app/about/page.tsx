import { ArrowRightIcon } from "lucide-react";

import Image from "next/image";

import Link from "next/link";
import React from "react";
import { ButtonVariants } from "../../components/ui/button";

import { Container } from "../../components/ui/container";

import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";
import { cn } from "../../lib/utils";
import { AcknowledgingTheLandIllustration } from "./acknowledging-the-land-illustration";
import { OurValuesAndApproachesIllustration } from "./our-values-and-approaches-illustration";
import { PlanToEndChronicHomelessnessIllustration } from "./plan-to-end-chronic-homelessness-illustration";
import { SharedPrinciplesIllustration } from "./shared-principles-illustration";

export default function AboutPage() {
	return (
		<>

			{/* Hero section */}
			<main className="bg-brand-black text-brand-white py-16">
				<Container size="6xl" className="grid grid-cols-5 gap-8 items-center">
					<div className="col-span-5 md:col-span-3 flex flex-col gap-8">
						<Heading size="2xl">
							About PECH
						</Heading>
						<Text size="xl">
							Learn more about our principles, values and approaches, as well as our commitment to help Waterloo Region reach functional zero homelessness by 2030.
						</Text>
					</div>
					<div className="hidden md:block md:col-span-2">
						<Image
							alt="Logo of the PECH organization"
							src="/logomark_highres.png"
							width={128}
							height={128}
							className="object-contain h-80 w-80"
							priority
						/>
					</div>
				</Container>

			</main>
			{/* The plan to end chronic homelessness section */}
			<section className="py-16">
				<Container size="6xl" className="grid grid-cols-5 gap-8 items-center">
					<div className="col-span-5 md:col-span-3 flex flex-col gap-8">
						<Heading size="lg" as="h3">
							The Plan to End Chronic Homelessness
						</Heading>
						<Text size="xl">
							The Plan to End Chronic Homelessness is a community-made plan to help Waterloo Region reach functional zero homelessness by 2030. This means very few people are without housing, and anyone who loses their housing can get help quickly.
						</Text>
						<Text size="xl">
							The Plan was created by many community members, including people with lived experience of homelessness, frontline workers, community groups, advocates, and Regional staff.
						</Text>
						<Link
							href="/plan"
							className={cn(
								ButtonVariants({
									size: "default",
								}),
								"bg-brand-dark-green text-white hover:bg-brand-dark-green/90",
								"w-fit mt-2",
							)}
						>
							Learn more about the Plan
							<ArrowRightIcon />
						</Link>
					</div>
					<div className="hidden md:block md:col-span-2">
						<PlanToEndChronicHomelessnessIllustration
							className={cn(
								"w-96 h-96",
								"hidden md:block",
							)}
						/>
					</div>
				</Container>
			</section>
			<section className="py-20 bg-brand-black text-brand-white">
				<Container size="6xl" className="grid grid-cols-5 gap-8 items-center">
					<div className="hidden md:block md:col-span-2">
						<PlanToEndChronicHomelessnessIllustration
							className={cn(
								"w-96 h-96",
								"hidden md:block",
							)}
						/>
					</div>
					<div className="col-span-5 md:col-span-3 flex flex-col gap-8">
						<Heading size="lg" as="h3">
							Meet the people who co-created the Plan

						</Heading>

						<ul className="list-disc list-inside">
							<Text as="li" className="" size="lg">
								{" "}
								<strong>Responsive: </strong>
								{" "}
								People with lived experience guide decisions.
							</Text>
							<Text as="li" className="" size="lg">
								{" "}
								<strong>Sustainable: </strong>
								{" "}
								The system supports both the community and the workers who care for them.
							</Text>
							<Text as="li" className="" size="lg">
								{" "}
								<strong>Integrated: </strong>
								{" "}
								Services work together across housing, health, and community supports.
							</Text>
							<Text as="li" className="" size="lg">
								{" "}
								<strong>Inclusive and Accessible: </strong>
								{" "}
								Services are fair, person-centered, and easy to reach.
							</Text>
							<Text as="li" className="" size="lg">
								{" "}
								<strong>Adaptive: </strong>
								{" "}
								The system can adjust when things change.
							</Text>
						</ul>
						<Link
							href="/co-creators"
							className={cn(
								ButtonVariants({
									size: "default",
								}),
								"bg-brand-dark-green text-white hover:bg-brand-dark-green/90",
								"w-fit mt-2",
							)}
						>
							Meet the people who co-created the Plan
							<ArrowRightIcon />
						</Link>
					</div>

				</Container>
			</section>

			{/* Acknowledging the land section */}
			<section className="py-16">
				<Container size="6xl" className="grid grid-cols-5 gap-8 items-center">
					<div className="col-span-5 md:col-span-3 flex flex-col gap-8">
						<Heading size="lg" as="h3">
							Acknowledging the Land and Our Responsibilities
						</Heading>
						<Text size="lg">
							We live and work on the traditional territories of the Anishinaabe, Chonnonton (Neutral Peoples) and the Haudenosaunee. Their deep relationships with this land long predate the arrival of settlers.
						</Text>
						<Text size="lg">
							This region also lies within the Haldimand Tract, land along the Grand River that was “granted” to the Six Nations of the Grand River in 1784. These treaty promises were not upheld, and much of this land was taken or sold without the consent of the Indigenous Peoples who took care of this land.
						</Text>
						<Text size="lg">
							We recognize the ongoing impacts of colonialism, including the housing instability and inequities Indigenous communities continue to face. As we work toward ending chronic homelessness, we also commit to building relationships rooted in respect, responsibility, and action.
						</Text>
					</div>
					<div className="hidden md:block md:col-span-2">
						<AcknowledgingTheLandIllustration
							className={cn(
								"w-128 h-128",
								"hidden md:block",
							)}
						/>
					</div>
				</Container>
			</section>

			{/* Shared principles for change-making section */}
			<section className="py-20 bg-brand-black text-brand-white">
				<Container size="6xl" className="grid grid-cols-5 gap-8 items-center">
					<div className="hidden md:block md:col-span-2">
						<SharedPrinciplesIllustration className={cn(
							"w-96 h-96",
							"hidden md:block",
						)}
						/>
					</div>
					<div className="col-span-5 md:col-span-3 flex flex-col gap-8">
						<Heading size="lg" as="h3">
							Shared Principles for Change-Making
						</Heading>
						<Text size="xl">
							To help everyone work together under the Plan to End Chronic Homelessness, we follow a set of shared principles.
						</Text>
						<Text size="xl">
							We aim to:
						</Text>
						<div className="flex flex-col gap-4">
							<ul className="list-disc list-inside">
								<Text as="li" className="" size="lg">
									Support leadership from people with lived experience.
								</Text>
								<Text as="li" className="" size="lg">
									Champion human rights for all, from an intersectional lens.
								</Text>
								<Text as="li" className="" size="lg">
									Put people’s well-being before profit.
								</Text>
								<Text as="li" className="" size="lg">
									Improve how services and decision-making systems work.
								</Text>
								<Text as="li" className="" size="lg">
									Make sure solutions are created with and for equity-owed communities.
								</Text>
								<Text as="li" className="" size="lg">
									Commit to a safe Housing First approach.
								</Text>
							</ul>
						</div>
					</div>

				</Container>
			</section>

			{/* Our Values and Approaches are Rooted In: section */}
			<section className="py-16">
				<Container size="6xl" className="grid grid-cols-5 gap-8 items-center">
					<div className="col-span-5 md:col-span-3 flex flex-col gap-4">
						<Heading size="lg" as="h3">
							Our Values and Approaches are Rooted In:
						</Heading>
						<div className="flex flex-col gap-2">
							<Heading size="xs" as="h4">
								Human Rights
							</Heading>
							<Text size="xl">
								Everyone has the right to safe, adequate housing. People experiencing homelessness are rights-holders, and their needs and choices must guide government decisions.
							</Text>
						</div>
						<div className="flex flex-col gap-2">

							<Heading size="xs" as="h4">
								Housing First
							</Heading>
							<Text size="xl">
								Housing First means giving people permanent housing without barriers or conditions, such as needing to be sober. People choose where they live, are included in the community, and receive wraparound supports like health care and case management.
							</Text>
						</div>
						<div className="flex flex-col gap-2">
							<Heading size="xs" as="h4">
								Lived Experience
							</Heading>
							<Text size="xl">
								People who have experienced homelessness helped shape the Plan. They contributed to definitions, descriptions of system problems, examples of solutions, focus areas, and key actions.
							</Text>
						</div>
						<div className="flex flex-col items-start">
							<Heading size="xs" className="center-items xsm break-words">
								"Everybody needs and deserves a safe place. It’s a human right."
							</Heading>
							<Text size="lg" className="break-words">
								—(Engagement Participant)
							</Text>
						</div>
					</div>
					<div className="hidden md:block md:col-span-2">
						<OurValuesAndApproachesIllustration
							className={cn(
								"w-96 h-96",
								"hidden md:block",
							)}
						/>
					</div>
				</Container>
			</section>
		</>

	);
}
