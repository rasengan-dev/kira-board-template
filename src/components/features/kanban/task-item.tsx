import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Task } from "@/entities/tasks";
import { cn } from "@/lib/utils";
import { useDraggable } from "@dnd-kit/core";
import {
	Folder,
	Loader,
	ClockArrowUp,
	MessageCircleMore,
	Users,
} from "lucide-react";

type Props = {
	data: Task;
};

export default function TaskItem({ data }: Props) {
	const { setNodeRef, listeners, attributes, transform, isDragging } =
		useDraggable({
			id: data.id,
			data,
		});

	const style = transform
		? {
				transform: `translate(${transform.x}px, ${transform.y}px)`,
		  }
		: undefined;

	return (
		<article
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className={cn(
				"w-full rounded-lg p-2 bg-background border min-h-[100px]",
				isDragging && "opacity-80 rotate-6 cursor-grabbing"
			)}
			style={style}
		>
			<div>
				<h2 className='font-medium whitespace-nowrap overflow-hidden text-ellipsis'>
					{data.title}
				</h2>
			</div>
			<div className='mt-4 flex items-center gap-2 mb-4'>
				<Users size={14} />
				<Badge variant={"outline"}>
					<img src='rasengan.svg' className='w-4 h-4' alt='user' />
					<span>Dilane Kombou</span>
				</Badge>
				<Badge>
					<span>Web</span>
				</Badge>
				<Badge>
					<span>UI/UX</span>
				</Badge>
			</div>

			<div className='mt-auto flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<div className='px-0 py-0 h-6 text-xs flex items-center gap-1 text-foreground/60'>
						<Folder size={14} />
						<span>4</span>
					</div>

					<div className='px-0 py-0 h-6 text-xs flex items-center gap-1 text-foreground/60'>
						<Loader size={14} />
						<span>50%</span>
					</div>

					<div className='px-0 py-0 h-6 text-xs flex items-center gap-1 text-foreground/60'>
						<MessageCircleMore size={14} />
						<span>2</span>
					</div>
				</div>

				<div className='px-0 py-0 h-6 text-xs flex items-center gap-1 text-foreground/60'>
					<ClockArrowUp size={14} />
					<span>4d</span>
				</div>
			</div>
		</article>
	);
}
