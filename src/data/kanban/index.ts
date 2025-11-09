import { Task, TaskList } from "@/entities/tasks";

export const KanbanTasks: TaskList[] = [
	new TaskList({
		id: "to-do",
		name: "TODO",
		tasks: [
			new Task({
				id: "task-1",
				title: "Implement dynamic import system",
				description:
					"Allow Rasengan.js to dynamically import files from the project using a clean API.",
				order: 1,
				listId: "to-do",
			}),
			new Task({
				id: "task-2",
				title: "Add metadata management (Helmet-like)",
				description:
					"Implement metadata manager for CSR mode in Rasengan.js similar to React Helmet.",
				order: 2,
				listId: "to-do",
			}),
			new Task({
				id: "task-3",
				title: "Create documentation landing page",
				description:
					"Design and write a new home page for Rasengan.js documentation.",
				order: 3,
				listId: "to-do",
			}),
			new Task({
				id: "task-4",
				title: "Add search functionality to RasenganHub",
				description:
					"Implement full-text search and filter system for templates in RasenganHub.",
				order: 4,
				listId: "to-do",
			}),
			new Task({
				id: "task-5",
				title: "Design new Rasengan UI homepage",
				description:
					"Highlight templates, components, and usage examples for Rasengan UI.",
				order: 5,
				listId: "to-do",
			}),
			new Task({
				id: "task-6",
				title: "Implement @rasenganjs/byakugan analytics package",
				description:
					"Track usage events, page views, and performance metrics within Rasengan apps.",
				order: 6,
				listId: "to-do",
			}),
			new Task({
				id: "task-7",
				title: "Create Kanban template (anime-inspired)",
				description:
					"Develop a new Kanban board template for RasenganHub with smooth drag & drop.",
				order: 7,
				listId: "to-do",
			}),
			new Task({
				id: "task-8",
				title: "Add authentication to RasenganHub",
				description:
					"Allow users to sign in with Google and manage their templates and stats.",
				order: 8,
				listId: "to-do",
			}),
			new Task({
				id: "task-9",
				title:
					"Write blog post: 'Why Rasengan.js is the future of React frameworks'",
				description:
					"Publish a detailed article explaining the core vision and ecosystem philosophy.",
				order: 9,
				listId: "to-do",
			}),
			new Task({
				id: "task-10",
				title: "Implement template ratings and comments",
				description:
					"Let users rate and comment on templates to improve engagement in RasenganHub.",
				order: 10,
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
				id: "task-11",
				title: "Develop @rasenganjs/kurama state manager",
				description:
					"Improve reactivity and selector optimization to match Zustand-level performance.",
				order: 1,
				listId: "in-progress",
			}),
			new Task({
				id: "task-12",
				title: "Implement dark/light theme system in Rasengan UI",
				description:
					"Add built-in theme switching for all Rasengan UI components.",
				order: 2,
				listId: "in-progress",
			}),
			new Task({
				id: "task-13",
				title: "Test RasenganHub S3 image handling",
				description:
					"Ensure secure and optimized S3 image uploads for private templates.",
				order: 3,
				listId: "in-progress",
			}),
			new Task({
				id: "task-14",
				title: "Refactor Rasengan CLI (create-rasengan)",
				description:
					"Add new prompts for template selection and environment setup.",
				order: 4,
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
				id: "task-15",
				title: "Review Plus Ultra template code quality",
				description:
					"Ensure clean architecture, accessibility, and maintainable structure.",
				order: 1,
				listId: "in-review",
			}),
			new Task({
				id: "task-16",
				title: "Validate deployment to Vercel via .vercel folder plugin",
				description:
					"Confirm that custom Vite plugin structure works correctly with Vercel hosting.",
				order: 2,
				listId: "in-review",
			}),
			new Task({
				id: "task-17",
				title: "Check RasenganHub moderator dashboard",
				description:
					"Review dashboard logic and permissions for moderators and admins.",
				order: 3,
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
				id: "task-18",
				title: "Release Plus Ultra template (v1.0)",
				description:
					"Template published on RasenganHub and available for purchase.",
				order: 1,
				listId: "done",
			}),
			new Task({
				id: "task-19",
				title: "Finalize @rasenganjs/sitemap package",
				description:
					"Automatic sitemap generation for all Rasengan.js projects.",
				order: 2,
				listId: "done",
			}),
			new Task({
				id: "task-20",
				title: "Publish Rasengan.js v1.1.3",
				description:
					"Includes bug fixes, improved DX, and better CLI feedback.",
				order: 3,
				listId: "done",
			}),
		],
		color: "bg-green-400",
	}),
];
