import { Heading } from "../../../ui/heading";
import { Separator } from "../../../ui/separator";
import { Text } from "../../../ui/text";
import { ChronicHomelessnessCountIllustration } from "./chronic-homelessness-count-illustration";
import { ChronicHomelessnessInSystemCountIllustration } from "./chronic-homelessness-in-system-count-illustration";
import { HowPeopleEnterAndLeaveHomelessness } from "./entry-exit";
import { OverallHomelessCountIllustration } from "./overall-homeless-count-illustration";
import { ShelterStatusSection } from "./shelter-status";
import { TotalSystemOccupancyCountIllustration } from "./total-system-occupancy-count-illustration";

const DataArr = [
	{
		id: "overall-homelessness-count",
		title: "Overall Homelessness Count",
		value: 17,
		illustration: OverallHomelessCountIllustration,
	},
	{
		id: "chronic-homelessness-count",
		title: "Chronic Homelessness Count",
		value: 32,
		illustration: ChronicHomelessnessCountIllustration,
	},
	{
		id: "total-number-of-spaces-in-use",
		title: "Total Number of Spaces In Use",
		value: "89%",
		illustration: TotalSystemOccupancyCountIllustration,
	},
	{
		id: "chronic-homelessness-in-the-system",
		title: "Chronic Homelessness in the System",
		value: "78%",
		illustration: ChronicHomelessnessInSystemCountIllustration,
	},
];

const DescriptionArr = [
	{
		title: "Overall Homelessness Count",
		description: [
			"Overall homelessness is the total number of people we know are experiencing homelessness at a given time.",
			"The real number is likely higher, because we cannot fully count hidden homelessness, like when people stay with friends or in unsafe housing.",
		],
	},
	{
		title: "Chronic Homelessness Count",
		description: [
			"Chronic homelessness means a person has been without housing for at least six months in the past year, or many times over the last three years that add up to 18 months or more.",
		],
	},
	{
		title: "Total Number of Spaces In Use",
		description: [
			"The total number of spaces in use shows how many spots in our housing system are filled. This includes shelters, overflow hotel spaces, transitional housing, and supportive housing.",
			"Some spaces are only open to certain groups, so it may look like there are more open spots than people can actually use.",
		],
	},
	{
		title: "Chronic Homelessness in the System",
		description: [
			"The percent of people in the system experiencing chronic homelessness.",
		],
	},
];

export function DataDashboard() {
	return (
		<div className="flex flex-col gap-8">
			<Heading size="lg" className="font-bold">
				Homelessness in Waterloo Region
			</Heading>
			<Heading size="md" className="font-semibold">
				Monthly Snapshot:
			</Heading>
			<Separator className="data-[orientation=horizontal]:h-px bg-brand-black data-[orientation=horizontal]:w-full" />
			<Heading size="md" as="h3" className="font-semibold">
				The size of the homelessness problem
			</Heading>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{DataArr.map(({
					id,
					title,
					value,
					illustration: Illustration,
				}) => {
					return (
						<div key={id}>
							<Heading size="xs">
								{title}
							</Heading>
							<div className="my-2 w-full flex items-baseline gap-8">
								<Illustration />
								<Heading as="p" size="2xl">
									{value}
								</Heading>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col gap-4">
				{DescriptionArr.map(({ title, description }) => {
					const id = title.toLowerCase().replace(/ /g, "-");
					return (
						<div key={`info-details-${id}`} className="flex flex-col gap-2">
							<Text size="xl">
								{title}
							</Text>
							<div className="flex flex-col gap-1">
								{description.map((item) => {
									return (
										<Text
											as="p"
											size="sm"
											key={`info-details-${id}-${item}`}
										>
											{item}
										</Text>
									);
								})}
							</div>

						</div>
					);
				})}
			</div>
			<Separator
				className="data-[orientation=horizontal]:h-px bg-brand-black data-[orientation=horizontal]:w-full"
			/>
			<Heading as="h3" size="md" className="font-semibold">
				Navigating through the Homelessness System
			</Heading>
			<Separator
				className="data-[orientation=horizontal]:h-px bg-brand-black data-[orientation=horizontal]:w-full"
			/>
			<HowPeopleEnterAndLeaveHomelessness />
			<ShelterStatusSection />
			<Separator
				className="data-[orientation=horizontal]:h-px bg-brand-black data-[orientation=horizontal]:w-full"
			/>
			<Text size="sm" as="p" className="text-brand-grey">
				The data on this page comes from a database called HIFIS 4.0, which is the Region of Waterloo's client management system.
			</Text>
		</div>
	);
}
