"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { FocusCardData } from "@/app/plan/focus-cards";
import { cn } from "@/lib/utils";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Maximize2, Minimize2 } from "lucide-react";

export interface FocusCardProps {
	data: FocusCardData;
	className?: string;
}

export function FocusCard({ data, className }: FocusCardProps) {
	const [open, setOpen] = useState(false);
	const localId = useId();
	const layoutBaseId = useMemo(() => `${data.id}-${localId}`, [data.id, localId]);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		if (open) {
			const timeoutId = setTimeout(() => titleRef.current?.focus(), 0);
			return () => clearTimeout(timeoutId);
		}
		return undefined;
	}, [open]);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<Card
				ref={cardRef}
				className={cn("relative overflow-hidden transition-colors min-h-[320px] pt-0", className)}
				aria-describedby={`${data.id}-summary`}
			>
				{/* Keep a static image in place when the animated card lifts out */}
				{open
					? (
						<div className="pointer-events-none absolute left-0 right-0 top-0">
							<div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
								<Image
									src={data.image.src}
									alt=""
									fill
									className="object-cover"
									aria-hidden
									priority={false}
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
							</div>
						</div>
					)
					: null}

				{/* Animated card that "lifts" to the dialog */}
				<motion.div layoutId={`${layoutBaseId}-container`}>
					<div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
						<motion.div layoutId={`${layoutBaseId}-image`} className="h-full w-full">
							<Image
								src={data.image.src}
								alt={data.image.alt}
								fill
								className="object-cover"
								priority={false}
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</motion.div>
					</div>
				</motion.div>
				<CardHeader>
					<CardTitle>
						<Heading size="xs">
							{data.title}
						</Heading>
					</CardTitle>
					<CardDescription id={`${data.id}-summary`}>
						<Text size="md" className="text-brand-dark-green">
							{data.summary}
						</Text>
					</CardDescription>
					<CardAction>
						<DialogTrigger asChild>
							<Button
								size="sm"
								variant="secondary"
								aria-expanded={open}
								aria-controls={`${layoutBaseId}-dialog`}
								className="outline outline-solid outline-brand-black/50 flex items-center"
							>
								{open ? "Collapse" : "Expand"}
								<Maximize2 className="h-4 w-4" />
							</Button>
						</DialogTrigger>
					</CardAction>
				</CardHeader>
				<CardContent />
			</Card>

			<AnimatePresence>
				{open
					? (
						<>
							<DialogOverlay />
							<DialogContent id={`${layoutBaseId}-dialog`} className="max-w-4xl p-0 overflow-hidden" showCloseButton={false}>
								<motion.div
									layoutId={`${layoutBaseId}-container`}
									className="bg-background"
									transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
								>
									<div className="relative w-full overflow-hidden">
										<motion.div layoutId={`${layoutBaseId}-image`} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}>
											<Image
												src={data.image.src}
												alt={data.image.alt}
												width={1280}
												height={720}
												className="h-[240px] w-full object-cover sm:h-[300px]"
												priority={open}
											/>
										</motion.div>
									</div>

									<div className="px-6 py-5 flex flex-col gap-4">
										<div className="flex items-center justify-between gap-3">
											<Heading size="sm" asChild>
												<DialogTitle>
													{data.title}
												</DialogTitle>
											</Heading>
											<DialogClose asChild>
												<Button
													size="sm"
													variant="secondary"
													aria-label="Collapse"
													aria-controls={`${layoutBaseId}-dialog`}
													className="outline outline-solid outline-brand-black/50 flex items-center"
												>
													Collapse
													<Minimize2 className="h-4 w-4" />
												</Button>
											</DialogClose>
										</div>
										<Text size="sm" className="text-brand-dark-green">
											{data.summary}
										</Text>
										{data.caption
											? (
												<Text size="md">
													{data.caption}
												</Text>
											)
											: null}
										<ul className="grid gap-3 list-disc pl-5">
											{data.details.map(item => (
												<Text
													as="li"
													size="md"
													key={`${data.id}-${item}`}
													className="list-disc"
												>
													{item}
												</Text>
											))}
										</ul>
									</div>
								</motion.div>
							</DialogContent>
						</>
					)
					: null}
			</AnimatePresence>
		</Dialog>
	);
}

export default FocusCard;
