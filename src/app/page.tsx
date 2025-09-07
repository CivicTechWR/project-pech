import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { HouseIllustration } from "@/components/pages/index-page";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { BuildingIllustration } from "../components/pages/index-page/building-illustration";
import { BuildingUnderConstructionIllustration } from "../components/pages/index-page/building-under-construction-illustration";
import { FallenBuildingIllustration } from "../components/pages/index-page/fallen-building-illustration";
import { HousingStatsContainer } from "../components/pages/index-page/housing-stats/housing-stats-container";

const IllustrationWithCopyItems: Array<IllustrationWithCopyProps> = [
	{
		illustration: <BuildingIllustration />,
		copy: "When constraints are not addressed",
	},
	{
		illustration: <BuildingUnderConstructionIllustration />,
		copy: "Our foundation becomes shaky",
	},
	{
		illustration: <FallenBuildingIllustration />,
		copy: "Until it can't withstand its own weight and comes crashing down",
	},
];

export default function Home() {
	return (
		<React.Fragment>
			<main className="bg-brand-black text-brand-white">
				<Container
					size="6xl"
					as="section"
					className={cn(
						"flex flex-row items-center justify-between gap-16",
						"py-16",
					)}
				>
					<div
						className="max-w-xl flex flex-col gap-4"
					>
						<Heading size="2xl" className="font-normal">
							<span className="font-bold">The Plan</span>
							{" "}
							<br />
							to End Chronic Homelessness
						</Heading>
						<Text size="lg" className="font-normal">
							A collaborative roadmap for strategies, resources and timelines to end chronic homelessness in Waterloo Region
						</Text>
					</div>
					<HouseIllustration />
				</Container>
			</main>
			<Container
				size="6xl"
				className="py-20"
			>
				<div>
					<HousingStatsContainer />
				</div>
			</Container>
			<section className="bg-brand-black text-brand-white py-20">
				<Container
					size="6xl"
					as="section"
					className="flex flex-col gap-8"
				>
					<Heading size="md" className="font-semibold text-center">
						Our housing system has become progressively more unstable
					</Heading>
					<div
						className="grid grid-cols-1 md:grid-cols-3"
					>
						{IllustrationWithCopyItems.map(({ copy, illustration }) => {
							return (
								<IllustrationWithCopy
									key={`illustration-with-copy:${copy}`}
									copy={copy}
									illustration={illustration}
								/>
							);
						})}
					</div>
					<div className="flex flex-col items-start">
						<Heading size="md" className="font-normal" as="h3">
							“Everybody needs and deserves a safe place, it's a human right.”
						</Heading>
						<Text size="xl">
							- PECH  Interview Participant
						</Text>
					</div>
				</Container>
				<Container
					size="6xl"
					className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center"
				>
					<div className="flex items-center gap-4 flex-col">
						<div>
							<OutlinedHouseIllustration />
							<Text size="lg">
								It's time to build a stronger system
							</Text>
						</div>
					</div>
					<div className="flex gap-4 mt-8 flex-col justify-evenly">
						<Heading size="sm" className="text-brand-light-green font-bold">
							The data we collect has real life stories behind the numbers
						</Heading>
						<Link
							href="/research"
							className={cn(
								"bg-brand-white text-brand-dark-green",
								"flex gap-2 p-2.5 w-fit rounded-md",
							)}
						>
							View the research
							<ArrowRightIcon />
						</Link>
					</div>
				</Container>
			</section>
		</React.Fragment>
	);
}

function OutlinedHouseIllustration(props: React.ComponentPropsWithRef<"svg">) {
	return (
		<svg
			width="242"
			height="265"
			viewBox="0 0 242 265"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M168.687 221.25L187.191 197.806L186.209 103.324L163.636 125.278L168.687 221.25Z" fill="#71C6AC" />
			<path d="M147.937 213.637L168.892 221.327L166.704 126.404L142.608 117.562L147.937 213.637Z" fill="#1E968C" />
			<path d="M162.272 94.5405L186.225 103.331L166.807 126.439L142.535 117.532L162.272 94.5405Z" fill="#095A5A" />
			<path d="M54.939 224.47L70.7558 201.781L71.8385 96.868L52.0191 120.425L54.939 224.47Z" fill="#71C6AC" />
			<path d="M35.824 212.169L55.1284 224.592L56.1663 115.948L32.6471 107.96L35.824 212.169Z" fill="#1E968C" />
			<path d="M49.9348 87.8548L71.9824 96.7395L55.9841 115.862L32.5799 107.913L49.9348 87.8548Z" fill="#095A5A" />
			<path d="M194.662 151.552L164.052 141.921L88.6989 46.3188L123.601 53.9104L194.662 151.552Z" fill="#71C6AC" />
			<path d="M203.502 126.705L194.574 151.798L116.618 52.7367L132.56 28.7294L203.502 126.705Z" fill="#1E968C" />
			<path d="M102.431 22.514L88.4756 46.3018L116.725 52.5283L132.589 28.6384L102.431 22.514Z" fill="#095A5A" />
			<path d="M30.353 141.325L60.9629 131.694L136.316 36.092L101.414 43.6836L30.353 141.325Z" fill="#71C6AC" />
			<path d="M21.5133 116.478L30.4409 141.571L108.397 42.5098L92.4552 18.5026L21.5133 116.478Z" fill="#1E968C" />
			<path d="M122.584 12.2884L136.539 36.0762L108.29 42.3027L92.4258 18.4128L122.584 12.2884Z" fill="#095A5A" />
			<path d="M40.7432 200.51L69.6963 184.759L172.665 198.501L144.602 218.611L40.7432 200.51Z" fill="#71C6AC" />
			<path d="M45.2903 222.744L40.6982 200.29L143.93 215.325L149.21 241.144L45.2903 222.744Z" fill="#1E968C" />
			<path d="M177.911 224.15L172.662 198.484L143.91 215.214L149.229 241.222L177.911 224.15Z" fill="#095A5A" />
		</svg>
	);
}

interface IllustrationWithCopyProps {
	illustration: React.ReactNode;
	copy: string;
}

function IllustrationWithCopy(props: IllustrationWithCopyProps) {
	return (
		<div className="flex flex-col items-center">
			<div className="h-72 w-full flex items-end justify-center">
				{props.illustration}
			</div>
			<Text size="lg" className="w-full mt-4 text-center">
				{props.copy}
			</Text>
		</div>
	);
}
