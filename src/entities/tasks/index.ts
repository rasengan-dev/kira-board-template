export const KanbanColumns = {
	TODO: {
		id: "to-do",
		title: "To Do",
	},
	IN_PROGRESS: {
		id: "in-progress",
		title: "In Progress",
	},
	IN_REVIEW: {
		id: "in-review",
		title: "In Review",
	},
	DONE: {
		id: "done",
		title: "Done",
	},
} as const;

export type KanbanColumn = keyof typeof KanbanColumns;

export interface ITask {
	id: string;
	title: string;
	description: string;
	order: number;
	listId: string;
}

export interface ITaskList {
	id: string;
	name: KanbanColumn;
	tasks: ITask[];
	color: string;
}

export class Task {
	private _id: string;
	private _title: string;
	private _description: string;
	private _order: number;
	private _listId: string;

	constructor(data: ITask) {
		this._id = data.id;
		this._title = data.title;
		this._description = data.description;
		this._order = data.order;
		this._listId = data.listId;
	}

	get id() {
		return this._id;
	}

	get title() {
		return this._title;
	}

	get description() {
		return this._description;
	}

	get order() {
		return this._order;
	}

	get listId() {
		return this._listId;
	}

	set listId(listId: string) {
		this._listId = listId;
	}
}

export class TaskList {
	private _id: string;
	private _name: KanbanColumn;
	private _tasks: Task[];
	private _color: string;

	constructor(data: ITaskList) {
		this._id = data.id;
		this._name = data.name;
		this._tasks = data.tasks.map((task) => new Task(task));
		this._color = data.color;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get tasks() {
		return this._tasks;
	}

	get color() {
		return this._color;
	}

	set tasks(tasks: Task[]) {
		this._tasks = tasks;
	}
}
