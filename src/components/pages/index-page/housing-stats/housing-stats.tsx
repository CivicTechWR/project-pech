"use server";

import { readItem, readItems } from "@directus/sdk";
import { cookies } from "next/headers";
import { directus } from "../../../../lib/directus";
import { Container } from "../../../ui/container";

const dynamic = "force-dynamic";

async function FetchDashboardData(date: Date) {
	const data = await directus.request(
		readItems("dashboard", {
			sort: ["Year_Month"],
			fields: ["Chronic_Y_Count"],
		}),
	);

	return data;
}

export async function HousingStats() {
	const c = await cookies();

	const date = new Date();

	const data = FetchDashboardData(date);

	const time = `${date.getFullYear}-${date.getMonth}`;

	return (
		<Container
			size="6xl"
		>
			<div className="grid grid-cols-12">
				<div className="col-span-12 md:col-span-8">
					Hello there:
					<code>
						<pre>
							{JSON.stringify(data, null, 2)}
						</pre>
					</code>
				</div>
				<div></div>
			</div>
		</Container>
	);
}
