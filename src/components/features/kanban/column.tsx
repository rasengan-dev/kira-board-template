import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import { Ellipsis, Plus } from "lucide-react";
import TaskItem from "./task-item";
import { KanbanColumns, TaskList } from "@/entities/tasks";

type Props = {
	data: TaskList;
};

export default function Column({ data }: Props) {
	const { isOver, setNodeRef } = useDroppable({ id: data.id, data });

	return (
		<div className='flex flex-col w-full p-4 bg-muted rounded-lg'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<div className={cn("w-[6px] h-6 rounded-lg", data.color)}></div>
					<h2 className='text-sm font-semibold'>
						{KanbanColumns[data.name].title}
					</h2>
					<Badge className='text-[12px] px-1 py-0 rounded-sm text-foreground/60 bg-input/50'>
						{data.tasks.length}
					</Badge>
				</div>
				<div className='flex items-center gap-2'>
					<Button
						size='icon'
						variant='ghost'
						className='size-6 hover:bg-input/50'
					>
						<Plus />
					</Button>
					<Button
						size='icon'
						variant='ghost'
						className='size-6 hover:bg-input/50'
					>
						<Ellipsis />
					</Button>
				</div>
			</div>

			<div
				ref={setNodeRef}
				className={cn(
					"w-full min-h-[200px] my-4 rounded-lg flex flex-col gap-4",
					isOver && "bg-input/50"
				)}
			>
				{data.tasks.map((task) => (
					<TaskItem key={task.id} data={task} />
				))}
			</div>

			<div className='flex items-center gap-2'>
				<Button
					size='icon'
					variant='ghost'
					className='size-6 hover:bg-input/50'
				>
					<Plus />
				</Button>

				<span className='text-sm text-foreground/70'>Add new</span>
			</div>
		</div>
	);
}
