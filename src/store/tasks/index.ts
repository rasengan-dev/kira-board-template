import { KanbanTasks } from "@/data/kanban";
import { Task, TaskList } from "@/entities/tasks";
import { create } from "zustand";

type State = {
	tasks: Array<TaskList>;
};

type Actions = {
	addTask: (task: Task, listId: string) => void;
	removeTask: (id: string, listId: string) => void;
	updateTask: (task: Task, listId: string) => void;
	moveTask: (task: Task, fromListId: string, toListId: string) => void;
};

const useTasksStore = create<State & Actions>((set, get) => ({
	tasks: KanbanTasks,

	addTask: (task: Task, listId: string) => {
		const list = get().tasks.find((list) => list.id === listId);
		const state = get().tasks;

		if (list) {
			list.tasks.push(task);

			state.map((list) => {
				if (list.id === listId) {
					return {
						...list,
					};
				}
				return list;
			});

			set({
				tasks: state,
			});
		}
	},

	removeTask: (id: string, listId: string) => {},

	updateTask: (task: Task, listId: string) => {},

	moveTask: (task: Task, fromListId: string, toListId: string) => {
		let fromList = get().tasks.find((list) => list.id === fromListId);
		let toList = get().tasks.find((list) => list.id === toListId);
		const state = get().tasks;

		if (fromList && toList) {
			fromList.tasks = fromList.tasks.filter((t) => t.id !== task.id);
			task.listId = toListId;
			toList.tasks.push(task);

			state.map((list) => {
				if (list.id === fromListId) {
					return {
						...fromList,
					};
				}
				if (list.id === toListId) {
					return {
						...toList,
					};
				}
				return list;
			});

			set({
				tasks: state,
			});
		}
	},
}));

export default useTasksStore;
