"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "../../../ui/chart";
import { Heading } from "../../../ui/heading";
import { Text } from "../../../ui/text";

// Dummy data for the shelter status chart
const householdData = [
	{
		category: "Household / Individual",
		value: 127,
	},
];

const availableSpaceData = [
	{
		category: "Available Space",
		supportive: 18,
		transitional: 12,
		emergency: 48,
	},
];

const chartConfig = {
	supportive: {
		label: "Supportive",
		color: "#095a5a", // brand-dark-green
	},
	transitional: {
		label: "Transitional",
		color: "#1e968c", // brand-medium-green
	},
	emergency: {
		label: "Emergency Shelter / Overflow Motel",
		color: "#71c6ac", // brand-light-green
	},
	total: {
		label: "Total",
		color: "#5a5a5a", // brand-grey
	},
};

// Custom tick component using our Text component
function CustomYAxisTick({ x, y, payload }: any) {
	return (
		<g transform={`translate(${x},${y})`}>
			<foreignObject x={-130} y={-10} width={125} height={30}>
				<Text size="sm" className="text-right whitespace-nowrap">
					{payload.value}
				</Text>
			</foreignObject>
		</g>
	);
}

export function ShelterStatusSection() {
	return (
		<section className="flex flex-col gap-4">
			<Heading size="sm" as="h4" className="font-semibold">
				How Our Shelter System Is Doing
			</Heading>
			<Heading as="p" size="xs" className="font-semibold">
				People Who Need Shelter vs. Spaces Available
			</Heading>

			<div className="space-y-4">
				{/* First bar chart: Household / Individual */}
				<ChartContainer config={chartConfig} className="h-[80px] w-full">
					<BarChart
						data={householdData}
						layout="vertical"
						margin={{ left: 20, right: 40, top: 10, bottom: 10 }}
					>
						<XAxis type="number" hide domain={[0, 140]} />
						<YAxis
							type="category"
							dataKey="category"
							tickLine={false}
							axisLine={false}
							width={140}
							tick={<CustomYAxisTick />}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<Bar dataKey="value" fill={chartConfig.total.color} radius={4}>
							<LabelList
								dataKey="value"
								position="inside"
								style={{ fill: "white", fontSize: 12 }}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>

				{/* Second bar chart: Available Space (stacked) */}
				<ChartContainer config={chartConfig} className="h-[80px] w-full">
					<BarChart
						data={availableSpaceData}
						layout="vertical"
						margin={{ left: 20, right: 40, top: 10, bottom: 10 }}
					>
						<XAxis type="number" hide domain={[0, 140]} />
						<YAxis
							type="category"
							dataKey="category"
							tickLine={false}
							axisLine={false}
							width={140}
							tick={<CustomYAxisTick />}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />

						<Bar
							dataKey="supportive"
							stackId="a"
							fill={chartConfig.supportive.color}
							radius={[4, 0, 0, 4]}
						>
							<LabelList
								dataKey="supportive"
								position="center"
								style={{ fill: "white", fontSize: 12 }}
							/>
						</Bar>
						<Bar
							dataKey="transitional"
							stackId="a"
							fill={chartConfig.transitional.color}
						>
							<LabelList
								dataKey="transitional"
								position="center"
								style={{ fill: "white", fontSize: 12 }}
							/>
						</Bar>
						<Bar
							dataKey="emergency"
							stackId="a"
							fill={chartConfig.emergency.color}
							radius={[0, 4, 4, 0]}
						>
							<LabelList
								dataKey="emergency"
								position="center"
								style={{ fill: "white", fontSize: 12 }}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>

				{/* Legend */}
				<div className="flex items-center justify-center gap-4 pt-2">
					<div className="flex items-center gap-1.5">
						<div
							className="h-4 w-4 shrink-0 rounded-[2px]"
							style={{ backgroundColor: chartConfig.supportive.color }}
						/>
						<Text size="sm" className="text-muted-foreground">
							{chartConfig.supportive.label}
						</Text>
					</div>
					<div className="flex items-center gap-1.5">
						<div
							className="h-4 w-4 shrink-0 rounded-[2px]"
							style={{ backgroundColor: chartConfig.transitional.color }}
						/>
						<Text size="sm" className="text-muted-foreground">
							{chartConfig.transitional.label}
						</Text>
					</div>
					<div className="flex items-center gap-1.5">
						<div
							className="h-4 w-4 shrink-0 rounded-[2px]"
							style={{ backgroundColor: chartConfig.emergency.color }}
						/>
						<Text size="sm" className="text-muted-foreground">
							{chartConfig.emergency.label}
						</Text>
					</div>
				</div>
			</div>
		</section>
	);
}
