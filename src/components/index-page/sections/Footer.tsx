import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { TypographySmall } from "@/components/ui/typography";

export function Footer() {
	return (
		<footer className="bg-white mt-8 mb-8">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<TypographySmall 
						className="text-gray-300 hover:text-gray-500 transition-colors"
					>
						@ PECH
					</TypographySmall>

					<div className="flex items-center gap-6">
						<Link href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
							<Facebook className="h-5 w-5" />
							<span className="sr-only">Facebook</span>
						</Link>
						<Link href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
							<Instagram className="h-5 w-5" />
							<span className="sr-only">Instagram</span>
						</Link>
					</div>
				</div>


			</div>
		</footer>
	);
}
