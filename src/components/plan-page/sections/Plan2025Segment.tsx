import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Plan2025SegmentProps {
	barClassName?: string;
	connectorPosition?: "top" | "bottom";
	contentClassName?: string;
	children: ReactNode;
}

export default function Plan2025Segment({
	barClassName,
	connectorPosition = "bottom",
	contentClassName,
	children,
}: Plan2025SegmentProps) {
	return (
		<div className="relative w-full">
			<div className={cn("h-12 md:h-full", barClassName)}></div>
			<div className={cn(
				"md:absolute",
				connectorPosition === "top" ? "md:-top-27 flex flex-col-reverse md:flex-col" : "md:top-12"
			)}>
				{connectorPosition === "top" ? (
					<>
						<div className="flex flex-col">
							{children}
						</div>
						<div className="w-[1px] h-10 md:h-16 bg-brand-white/50"></div>
					</>
				) : (
					<>
						<div className="w-[1px] h-10 md:h-16 bg-brand-white/50"></div>
						<div className={cn("flex flex-col", contentClassName)}>
							{children}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
