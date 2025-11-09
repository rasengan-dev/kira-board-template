import { Task } from "@/entities/tasks";
import { useDraggable } from "@dnd-kit/core";

type Props = {
	data: Task;
};

export default function TaskItem({ data }: Props) {
	const { setNodeRef, listeners, attributes, transform } = useDraggable({
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
			className='w-full rounded-lg p-2 bg-background border min-h-[100px]'
			style={style}
		>
			{data.id}
		</article>
	);
}
