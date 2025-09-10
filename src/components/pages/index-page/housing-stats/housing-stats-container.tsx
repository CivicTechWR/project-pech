"use server";
import { readItems } from "@directus/sdk";
import { directus } from "../../../../lib/directus";
import { HousingStats } from "./housing-stats";

async function FetchDashboardData() {
	const data = await directus.request(
		readItems("dashboard", {
			sort: ["Year_Month"],
			fields: [
				"id",
				"Year_Month",
				"Housed_Chronic",
				"Housed_N_Chronic",
				"Outflow",
				"New_Chronic_Y_Inflow",
			],
		}),
	);

	const MONTH_LABELS = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const sorted_data = data
		.map((d) => {
			const Year_Month = d.Year_Month;

			const [year, month] = Year_Month.split("-");

			const year_num = Number.parseInt(year, 10);

			const month_num = Number.parseInt(month, 10);

			// Use UTC to avoid timezone-dependent shifts
			const date_ms = Date.UTC(year_num, month_num - 1, 1);

			const label = `${MONTH_LABELS[month_num - 1]} ${year_num}`;

			return { ...d, label, date_ms };
		})
		.sort((a, b) => a.date_ms - b.date_ms);

	return sorted_data;
}

export async function HousingStatsContainer() {
	const data = await FetchDashboardData();

	return (
		<HousingStats data={data} />
	);
}
