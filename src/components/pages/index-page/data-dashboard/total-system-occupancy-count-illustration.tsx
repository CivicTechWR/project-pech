import type React from "react";

export interface TotalSystemOccupancyCountIllustrationProps extends React.ComponentPropsWithRef<"svg"> {}

export function TotalSystemOccupancyCountIllustration(
	props: TotalSystemOccupancyCountIllustrationProps,
) {
	return (
		<svg
			width="120"
			height="120"
			viewBox="0 0 120 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<mask id="mask0_1970_2609" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
				<path d="M120 45.6523H107.224V119.999H13.249V45.6523H0L60 0L120 45.6523Z" fill="#5A5A5A" />
			</mask>
			<g mask="url(#mask0_1970_2609)">
				<rect x="-20.9805" y="-20.4346" width="161.74" height="182.174" fill="#5A5A5A" />
				<rect x="-7.86719" y="45.7275" width="129" height="82" fill="#1E968C" />
			</g>
			<path d="M60 65C69.9411 65 78 73.0589 78 83V119H42V83C42 73.0589 50.0589 65 60 65ZM60 35C68.2843 35 75 41.7157 75 50C75 58.2843 68.2843 65 60 65C51.7157 65 45 58.2843 45 50C45 41.7157 51.7157 35 60 35Z" fill="#F5F4ED" />
			<path d="M78 119V120H79V119H78ZM42 119H41V120H42V119ZM60 35V34V35ZM75 50H76H75ZM45 50H44H45ZM60 65V66C69.3888 66 77 73.6112 77 83H78H79C79 72.5066 70.4934 64 60 64V65ZM78 83H77V119H78H79V83H78ZM78 119V118H42V119V120H78V119ZM42 119H43V83H42H41V119H42ZM42 83H43C43 73.6112 50.6112 66 60 66V65V64C49.5066 64 41 72.5066 41 83H42ZM60 35V36C67.732 36 74 42.268 74 50H75H76C76 41.1634 68.8366 34 60 34V35ZM75 50H74C74 57.732 67.732 64 60 64V65V66C68.8366 66 76 58.8366 76 50H75ZM60 65V64C52.268 64 46 57.732 46 50H45H44C44 58.8366 51.1634 66 60 66V65ZM45 50H46C46 42.268 52.268 36 60 36V35V34C51.1634 34 44 41.1634 44 50H45Z" fill="#5A5A5A" />
		</svg>

	);
}
