import { Link, PageComponent } from "rasengan";
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CloudUpload, File, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Column from "@/components/features/kanban/column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import useTasksStore from "@/store/tasks";
import { Task } from "@/entities/tasks";

const Page: PageComponent = () => {
	const { tasks, moveTask } = useTasksStore();

	function handleDragEnd({ over, active }: DragEndEvent) {
		if (over && over.data.current && active.data.current) {
			moveTask(
				active.data.current as Task,
				active.data.current.listId,
				over.data.current.id
			);
		}
	}

	return (
		<section className='w-full h-auto dark:bg-background/60 bg-background text-foreground py-8'>
			<div className='px-8'>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link to='/'>
									<File size={16} />
								</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<span>Board</span>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Overview</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className='w-full mt-8 px-8'>
				<h1 className='font-medium text-3xl'>Rasengan.js Project</h1>
			</div>

			<div className='mt-4 w-full h-full min-h-[500px]'>
				<Tabs className='w-full h-full' defaultValue='board'>
					<div className='flex items-center gap-4 px-8'>
						<TabsList>
							<TabsTrigger className='px-4' value='board'>
								Board
							</TabsTrigger>
							<TabsTrigger className='px-4' value='list'>
								List
							</TabsTrigger>
							<TabsTrigger className='px-4' value='timeline'>
								Timeline
							</TabsTrigger>
							<TabsTrigger className='px-4' value='due-date'>
								Due Date
							</TabsTrigger>
						</TabsList>
						<div className='block h-6 w-px bg-border'></div>
						<div className='flex gap-2'>
							<Button variant='outline'>
								<CloudUpload />
								<span>Import</span>
							</Button>
							<Button>
								<Plus size={16} />
								<span>New Board</span>
							</Button>
						</div>
					</div>

					<DndContext onDragEnd={handleDragEnd}>
						<TabsContent
							value='board'
							className='w-full min-h-[500px] h-full overflow-x-auto scrollbar-hide flex gap-4 mt-8 px-8'
						>
							{tasks.map((task) => (
								<div key={task.id} className='w-full max-w-[370px] shrink-0'>
									<Column data={task} />
								</div>
							))}
						</TabsContent>
					</DndContext>
				</Tabs>
			</div>
		</section>
	);
};

export default Page;
