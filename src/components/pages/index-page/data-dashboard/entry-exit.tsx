import { Heading } from "../../../ui/heading";
import { Text } from "../../../ui/text";

const InflowData = [
	{
		title: "New to Homelessness",
		value: 8,
	},
	{
		title: "Returned after Time Away",
		value: 9,
	},
	{
		title: "Become Homeless Again",
		value: 6,
	},
];

const OutflowData = [
	{
		title: "Moved into Housing",
		value: 31,
	},
	{
		title: "No contact for 90+ days",
		value: 14,
	},
	{
		title: "Passed Away",
		value: 2,
	},
];

export function HowPeopleEnterAndLeaveHomelessness() {
	return (
		<section>
			<Heading size="sm" as="h4" className="font-semibold">
				How People Enter and Leave Homelessness
			</Heading>
			<div id="entry-exit-data-chart" className="flex flex-col lg:flex-row items-center justify-center gap-6 py-8">
				{/* Inflow Column */}
				<div className="flex flex-col gap-3 items-end">
					{InflowData.map((item) => {
						const id = item.title.toLowerCase().replace(/ /g, "-");

						const key = `inflow-data-${id}`;

						return (
							<div className="flex flex-row gap-4 items-center" key={key}>
								<Text size="sm" className="text-right whitespace-nowrap">
									{item.title}
								</Text>
								<div className="w-48 bg-brand-light-green text-center py-3 font-semibold text-2xl">
									{item.value}
								</div>
							</div>
						);
					})}
					<Text className="mt-2 text-center w-full">
						Inflow
					</Text>
				</div>

				{/* Arrow Connector */}
				<div className="text-5xl -mt-8 text-brand-grey">
					▶
				</div>

				{/* Active Column */}
				<div className="-mt-1 flex flex-col items-center">
					<div className="h-49 w-49 flex items-center justify-center bg-brand-medium-green">
						<Text className="text-brand-white text-6xl font-bold">
							629
						</Text>
					</div>
					<Text className="mt-2">
						Active
					</Text>
				</div>

				{/* Arrow Connector */}
				<div className="text-5xl -mt-8 text-brand-grey">
					▶
				</div>

				{/* Outflow Column */}
				<div className="flex flex-col gap-3 items-start">
					{OutflowData.map((item) => {
						const id = item.title.toLowerCase().replace(/ /g, "-");

						const key = `outflow-data-${id}`;

						return (
							<div className="flex flex-row gap-4 items-center" key={key}>
								<div className="w-48 text-brand-white bg-brand-dark-green text-center py-3 font-semibold text-2xl">
									{item.value}
								</div>
								<Text size="sm" className="text-left whitespace-nowrap">
									{item.title}
								</Text>
							</div>
						);
					})}
					<Text className="mt-2 text-center w-full">
						Outflow
					</Text>
				</div>
			</div>
		</section>
	);
}
