import Image from "next/image";
import { Container } from "../../components/ui/container";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			<section className="bg-brand-black text-white py-20">
				<Container size="6xl">
					<div className="grid lg:grid-cols-2 gap-8 items-center">
						<div className="flex flex-col gap-4">
							<Heading size="2xl" className="font-semibold">
								About PECH
							</Heading>
							<Text size="xl">
								The Plan to End Chronic Homelessness outlines an approach to achieve functional zero homelessness in Waterloo Region by 2030. It was created by community members including Lived Experts, frontline workers, community organizations, advocates, and Regional staff.
							</Text>
						</div>
						<div className="flex justify-center item-center flex-shrink-0">
							<div className="h-100 w-100">
								<Image
									alt="Logo of the PECH organization"
									src="/logomark.png"
									width={256}
									height={256}
									className="w-full h-full object-contain"
									priority
								/>
							</div>

						</div>
					</div>
				</Container>

			</section>
		</div>
	);
}
