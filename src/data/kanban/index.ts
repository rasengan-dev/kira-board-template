import { Task, TaskList } from "@/entities/tasks";

export const KanbanTasks: TaskList[] = [
	new TaskList({
		id: "to-do",
		name: "TODO",
		tasks: [
			new Task({
				id: "task-1",
				title: "Task 1",
				description: "Description 1",
				order: 1,
				listId: "to-do",
			}),
			new Task({
				id: "task-2",
				title: "Task 2",
				description: "Description 2",
				order: 2,
				listId: "to-do",
			}),
		],
		color: "bg-gray-400",
	}),
	new TaskList({
		id: "in-progress",
		name: "IN_PROGRESS",
		tasks: [
			new Task({
				id: "task-3",
				title: "Task 3",
				description: "Description 3",
				order: 1,
				listId: "in-progress",
			}),
			new Task({
				id: "task-4",
				title: "Task 4",
				description: "Description 4",
				order: 2,
				listId: "in-progress",
			}),
		],
		color: "bg-blue-400",
	}),
	new TaskList({
		id: "in-review",
		name: "IN_REVIEW",
		tasks: [
			new Task({
				id: "task-5",
				title: "Task 5",
				description: "Description 5",
				order: 1,
				listId: "in-review",
			}),
			new Task({
				id: "task-6",
				title: "Task 6",
				description: "Description 6",
				order: 2,
				listId: "in-review",
			}),
		],
		color: "bg-orange-400",
	}),
	new TaskList({
		id: "done",
		name: "DONE",
		tasks: [
			new Task({
				id: "task-7",
				title: "Task 7",
				description: "Description 7",
				order: 1,
				listId: "done",
			}),
		],
		color: "bg-green-400",
	}),
];
