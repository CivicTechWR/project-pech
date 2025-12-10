"use client";

import { useState } from "react";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "../../../ui/chart";
import { Heading } from "../../../ui/heading";
import { Text } from "../../../ui/text";

// Gender data from the image
const genderData = [
	{
		category: "Shelter User",
		male: 40,
		female: 49,
		twoSpirit: 6,
		transgenderMan: 4,
		transgenderWoman: 1,
		nonBinary: 1,
		others: 1,
	},
];

// Age group placeholder data
const ageGroupData = [
	{
		category: "Shelter User",
		youthUnder16: 5,
		youth16_24: 18,
		age25_39: 32,
		age40_54: 25,
		age55_64: 14,
		age65Plus: 6,
	},
];

const genderChartConfig = {
	male: {
		label: "Male",
		color: "#B975F0",
	},
	female: {
		label: "Female",
		color: "#F5D057",
	},
	twoSpirit: {
		label: "Two-Spirit",
		color: "#E97E49",
	},
	transgenderMan: {
		label: "Transgender Man",
		color: "#CF3F71",
	},
	transgenderWoman: {
		label: "Transgender Woman",
		color: "#2A7298",
	},
	nonBinary: {
		label: "Non-Binary",
		color: "#256535",
	},
	others: {
		label: "Others",
		color: "#4B3186",
	},
};

const ageChartConfig = {
	youthUnder16: {
		label: "Youth (Under 16)",
		color: "#9b7ec6",
	},
	youth16_24: {
		label: "Youth (16-24)",
		color: "#6a9fc6",
	},
	age25_39: {
		label: "25-39",
		color: "#6ac6a8",
	},
	age40_54: {
		label: "40-54",
		color: "#f4ce6a",
	},
	age55_64: {
		label: "55-64",
		color: "#d97856",
	},
	age65Plus: {
		label: "65+",
		color: "#c75769",
	},
};

// Custom tick component using our Text component
function CustomYAxisTick({ x, y, payload }: any) {
	return (
		<g transform={`translate(${x},${y})`}>
			<foreignObject x={-140} y={-10} width={135} height={30}>
				<Text size="sm" className="text-right whitespace-nowrap">
					{payload.value}
				</Text>
			</foreignObject>
		</g>
	);
}

type TabType = "gender" | "ageGroup";

export function GenderAgeDemographics() {
	const [activeTab, setActiveTab] = useState<TabType>("gender");

	const chartData = activeTab === "gender" ? genderData : ageGroupData;
	const chartConfig = activeTab === "gender" ? genderChartConfig : ageChartConfig;

	// Get ordered keys for rendering bars
	const dataKeys = activeTab === "gender"
		? ["male", "female", "twoSpirit", "transgenderMan", "transgenderWoman", "nonBinary", "others"]
		: ["youthUnder16", "youth16_24", "age25_39", "age40_54", "age55_64", "age65Plus"];

	return (
		<section className="flex flex-col gap-8">
			<Heading size="sm" as="h4" className="font-semibold">
				Gender and Age of People Experiencing Homelessness
			</Heading>

			{/* Tabs */}
			<div className="flex gap-2">
				<button
					type="button"
					onClick={() => setActiveTab("gender")}
					className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
						activeTab === "gender"
							? "bg-[#3d5a5a] text-white"
							: "bg-gray-200 text-gray-700 hover:bg-gray-300"
					}`}
				>
					Gender
				</button>
				<button
					type="button"
					onClick={() => setActiveTab("ageGroup")}
					className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
						activeTab === "ageGroup"
							? "bg-[#3d5a5a] text-white"
							: "bg-gray-200 text-gray-700 hover:bg-gray-300"
					}`}
				>
					Age Group
				</button>
			</div>

			<div className="space-y-4">
				{/* Stacked bar chart */}
				<ChartContainer config={chartConfig} className="h-[80px] w-full">
					<BarChart
						data={chartData}
						layout="vertical"
						margin={{ left: 20, right: 40, top: 10, bottom: 10 }}
					>
						<XAxis type="number" hide domain={[0, 100]} />
						<YAxis
							type="category"
							dataKey="category"
							tickLine={false}
							axisLine={false}
							width={140}
							tick={<CustomYAxisTick />}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />

						{dataKeys.map((key, index) => {
							const isFirst = index === 0;
							const isLast = index === dataKeys.length - 1;

							return (
								<Bar
									key={key}
									dataKey={key}
									stackId="a"
									fill={(chartConfig[key as keyof typeof chartConfig] as { color: string }).color}
									radius={
										isFirst
											? [4, 0, 0, 4]
											: isLast
												? [0, 4, 4, 0]
												: 0
									}
								>
									<LabelList
										dataKey={key}
										position="center"
										style={{ fill: "white", fontSize: 12 }}
										formatter={(value: number) => (value > 0 ? `${value}%` : "")}
									/>
								</Bar>
							);
						})}
					</BarChart>
				</ChartContainer>

				{/* Legend */}
				<div className="flex items-center justify-center flex-wrap gap-4 pt-2">
					{dataKeys.map((key) => {
						const config = chartConfig[key as keyof typeof chartConfig] as { color: string; label: string };
						return (
							<div key={key} className="flex items-center gap-1.5">
								<div
									className="h-4 w-4 shrink-0 rounded-[2px]"
									style={{ backgroundColor: config.color }}
								/>
								<Text size="sm" className="text-muted-foreground">
									{config.label}
								</Text>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
