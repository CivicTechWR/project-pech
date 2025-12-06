import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
		<div className="flex flex-col w-full h-full">
			{/* Desktop Top Area - Spacer/Content to align bars */}
			<div className="hidden md:flex flex-col justify-end h-[200px] shrink-0">
				{connectorPosition === "top" ? (
					<>
						<div className="flex flex-col pb-4">{children}</div>
						<div className="w-[1px] h-16 bg-brand-white/50"></div>
					</>
				) : (
					// Empty spacer to ensure bar alignment
					<div className="w-full h-full"></div>
				)}
			</div>

			{/* Bar */}
			<div className={cn("h-12 w-full shrink-0", barClassName)}></div>

			{/* Bottom Area - Content/Lines */}
			<div className={cn(
				"flex flex-col",
				// On desktop: Hide if position is top (already shown above). Show if bottom.
				// On mobile: Always show (because mobile layout is always Bar -> Line -> Content)
				connectorPosition === "top" ? "md:hidden" : "flex",
			)}
			>
				<div className="w-[1px] h-10 md:h-16 bg-brand-white/50"></div>
				<div className={cn("flex flex-col pt-4", contentClassName)}>
					{children}
				</div>
			</div>
		</div>
	);
}
