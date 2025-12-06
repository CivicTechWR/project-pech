import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Plan2025Segment from "./Plan2025Segment";

export default function Plan2025() {
	return (
		<div className="relative w-full pt-24 pb-24">
			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full"
			>
				<CarouselContent>
					{/* Segment 1: Using data */}
					<CarouselItem>
						<Plan2025Segment
							barClassName="bg-[#111111]"
							connectorPosition="bottom"
						>
							<Heading size="xs" className="text-md">Using data to guide decisions.</Heading>
							<Text size="sm" className="opacity-80">Tracking what works and sharing it widely.</Text>
						</Plan2025Segment>
					</CarouselItem>

					{/* Segment 2: Advocating for policy change */}
					<CarouselItem>
						<Plan2025Segment
							barClassName="bg-brand-grey"
							connectorPosition="top"
						>
							<Heading size="xs" className="text-md">Advocating for policy change.</Heading>
							<Text size="sm" className="opacity-80">Asking for stronger housing policies and more funding.</Text>
						</Plan2025Segment>
					</CarouselItem>

					{/* Segment 3: Supporting innovation */}
					<CarouselItem>
						<Plan2025Segment
							barClassName="bg-gradient-to-r from-brand-dark-green to-brand-light-green"
							connectorPosition="bottom"
							contentClassName="md:items-start"
						>
							<Heading size="xs" className="text-md">Supporting innovation</Heading>
							<Text size="sm" className="opacity-80">Backing new ideas and pilot projects that help people get and keep housing.</Text>
						</Plan2025Segment>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex" />
				<CarouselNext className="hidden md:flex" />
			</Carousel>
		</div>
	);
}
