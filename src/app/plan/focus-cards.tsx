export interface FocusCardData {
	id: string;
	title: string;
	summary: string;
	image: {
		src: string;
		alt: string;
	};
	details: Array<string>;
	caption?: string;
}

export const focusCards: Array<FocusCardData> = [
	{
		id: "better-policies",
		title: "Better policies and shared accountability",
		summary:
			"Learn how better policies and teamwork keep us on track.",
		image: {
			src: "/better-policies-and-shared-accountability.avif",
			alt: "People collaborating with sticky notes in a meeting room.",
		},
		details: [
			"Create a region-wide committee to guide the plan and track progress.",
			"Update program policies so all services follow Housing First and Human Rights principles.",
			"Create a climate and extreme weather plan to keep people safe.",
		],
		caption: "Make sure everyone, including programs, services, and government, follows the same policies and works toward the same goal: ending chronic homelessness.",
	},
	{
		id: "working-together",
		title: "Listening to community voices",
		summary:
			"Discover how lived experience and community knowledge guide the plan.",
		image: {
			src: "/working-together.avif",
			alt: "A group standing around a desk looking at a laptop and documents.",
		},
		details: [
			"Work with equity and reconciliation partners to make services fair and inclusive.",
			"Create ways for people with lived experience to help shape decisions and services.",
			"Establish an ongoing memorial process to honour and remember those lost to homelessness.",
		],
		caption: "Include the ideas and experiences of people who have lived without housing, so the plan reflects real needs.",
	},
	{
		id: "prevention",
		title: "Working together across systems",
		summary:
			"Explore how housing, health, and community services connect to support people.",
		image: {
			src: "/stopping-homelessness-before.avif",
			alt: "Hands holding a small paper house over a desk.",
		},
		details: [
			"Build stronger links between healthcare and housing services.",
			"Work with partners to make services easier to navigate.",
			"Align our work with settlement services to support newcomers facing homelessness.",
			"Expand the coordinated access system so people connect to supports faster.",
		],
		caption: "Connect housing, healthcare, and other community services so people can get the right help at the right time.",
	},
	{
		id: "fair-housing",
		title: "Fair and inclusive housing",
		summary: "Learn how housing and supports are designed to meet different needs fairly",
		image: {
			src: "/fair-and-inclusive-housing.avif",
			alt: "A building facade with balconies in the sun.",
		},
		details: [
			"Build more affordable and supportive housing.",
			"Create housing and specialized supports designed for older adults (50+).",
			"Develop a youth housing strategy to meet young people's needs.",
		],
		caption: "Build housing and supports that are welcoming, safe, and accessible for everyone, with a focus on equity and reconciliation.",
	},
	{
		id: "listening",
		title: "Stopping homelessness before it starts",
		summary:
			"Discover how prevention programs help people keep their homes.",
		image: {
			src: "/listening-to-community-voices.avif",
			alt: "A facilitator leading a discussion with people around a table.",
		},
		details: [
			"Protect existing affordable housing.",
			"Add programs that help people avoid eviction and find housing quickly.",
			"Establish a region-wide approach for outreach and encampment response.",
		],
		caption: "Help people stay in their homes and protect affordable housing so fewer people lose their housing.",
	},
	{
		id: "changing-narratives",
		title: "Changing how we talk about homelessness",
		summary:
			"Find out how changing the way we talk about homelessness can help end stigma.",
		image: {
			src: "/changing-how-we-talk-about-homelessness.avif",
			alt: "A person speaking to a small group near a whiteboard.",
		},
		details: [
			"Launch a public education plan to raise awareness and reduce stigma.",
			"Share ongoing updates so the community knows how we're doing.",
			"Add a feedback strategy to make sure we hear from people using services.",
		],
		caption: "Share stories and information that build understanding and reduce stigma about homelessness.",
	},
];
