import React from "react";

export interface AverageBedsAvailableIllustrationProps extends React.ComponentPropsWithRef<"svg"> {}

export function AverageBedsAvailableIllustration(props: AverageBedsAvailableIllustrationProps) {
	return (
		<svg
			width="120"
			height="120"
			viewBox="0 0 120 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M96 17L113 42.0001V114L96 89V17Z" fill="#5A5A5A" />
			<path d="M113 42H118V114H113V42Z" fill="#5A5A5A" />
			<path d="M96 17H101L118 42H113L96 17Z" fill="#5A5A5A" />
			<path d="M23 79H113V87H23V79Z" fill="#1E968C" />
			<path d="M6 54H96L113 79H23L6 54Z" fill="#71C6AC" />
			<path d="M6 54L23 79.0001V114L6 89V54Z" fill="#5A5A5A" />
			<path d="M1 89H6L23 114H18L1 89Z" fill="#5A5A5A" />
			<path d="M1 89H6V54H1V89Z" fill="#5A5A5A" />
		</svg>
	);
}
