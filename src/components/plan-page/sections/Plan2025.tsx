import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Plan2025Segment from "./Plan2025Segment";

export default function Plan2025() {
	return (
		<div className="relative w-full pt-24 pb-24">
			{/* Segmented bar with in-segment content and connectors */}
			<div className="grid grid-cols-1 md:grid-cols-3 w-full gap-y-12 md:gap-y-0 md:h-12">
				{/* Segment 1: Using data */}
				<Plan2025Segment
					barClassName="bg-[#111111]"
					connectorPosition="bottom"
				>
					<Heading size="xs" className="text-md">Using data to guide decisions.</Heading>
					<Text size="sm" className="opacity-80">Tracking what works and sharing it widely.</Text>
				</Plan2025Segment>

				{/* Segment 2: Advocating for policy change */}
				<Plan2025Segment
					barClassName="bg-brand-grey"
					connectorPosition="top"
				>
					<Heading size="xs" className="text-md">Advocating for policy change.</Heading>
					<Text size="sm" className="opacity-80">Asking for stronger housing policies and more funding.</Text>
				</Plan2025Segment>

				{/* Segment 3: Supporting innovation */}
				<Plan2025Segment
					barClassName="bg-gradient-to-r from-brand-dark-green to-brand-light-green"
					connectorPosition="bottom"
					contentClassName="md:items-start"
				>
					<Heading size="xs" className="text-md">Supporting innovation</Heading>
					<Text size="sm" className="opacity-80">Backing new ideas and pilot projects that help people get and keep housing.</Text>
				</Plan2025Segment>
			</div>
		</div>
	);
}
