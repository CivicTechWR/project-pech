import React, { Suspense } from "react";
import { Container } from "../../../ui/container";
import { Heading } from "../../../ui/heading";
import { HousingStats } from "./housing-stats";

export function HousingStatsContainer() {
	return (
		<Container
			size="6xl"
			className="py-20 flex flex-col gap-8"
		>
			<Heading size="md" className="font-normal">
				Monthly updates for Waterloo Region
			</Heading>
			<div>
				<Heading as="p" size="lg">
					Total people housed for Sept 2025
				</Heading>
				<Suspense fallback={<div>Loading...</div>}>
					<HousingStats />
				</Suspense>
			</div>
		</Container>
	);
}
