import { nanoid } from 'nanoid'
import { createTrackedSelector } from 'react-tracked'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export interface Task {
	id: string
	title: string
	completed: boolean
	details: string
}

interface TaskStore {
	tasks: Task[]
	search: string
	addTask: (title: string) => void
	changeDetails: (title: string, details: string) => void
	toggleTask: (id: string) => void
	deleteTask: (id: string) => void
	setSearch: (search: string) => void
	updateTask: (id: string, title: string) => void
	getTaskByTitle: (title: string) => Task | undefined
	getTaskById: (id: string) => Task | undefined
	taskAlreadyExists: (title: string) => boolean
	formatTaskTitle: (title: string) => string
}

export const useStore = createTrackedSelector(
	create<TaskStore>()(
		immer(
			persist(
				devtools((set, get) => ({
					tasks: [],

					search: '',

					addTask: (title: string) =>
						set((state) => {
							if (!title) return
							title = get().formatTaskTitle(title)
							if (get().taskAlreadyExists(title)) return
							state.tasks.push({ id: nanoid(), title, completed: false, details: '' })
						}),

					changeDetails: (title: string, details: string) => {
						details = details.trim()
						set((state) => {
							state.tasks = state.tasks.map((task) => (task.title === title ? { ...task, details } : task))
						})
					},

					toggleTask: (id: string) =>
						set((state) => {
							state.tasks = state.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
						}),

					deleteTask: (id: string) =>
						set((state) => {
							state.tasks = state.tasks.filter((task) => task.id !== id)
						}),

					setSearch: (search: string) =>
						set((state) => {
							state.search = search
						}),

					updateTask: (id: string, title: string) => {
						if (!title) {
							get().deleteTask(id)
							return
						}
						if (get().taskAlreadyExists(title)) return
						set((state) => {
							state.tasks = state.tasks.map((task) =>
								task.id === id ? { ...task, title: get().formatTaskTitle(title) } : task
							)
						})
					},

					getTaskByTitle: (title: string) => get().tasks.find((task) => task.title === get().formatTaskTitle(title)),

					taskAlreadyExists: (title: string) => {
						if (
							get()
								.tasks.map((task) => get().formatTaskTitle(task.title) === get().formatTaskTitle(title))
								.includes(true)
						) {
							alert('Task already exists')
							return true
						}
						return false
					},

					formatTaskTitle: (title: string) =>
						title
							.split(' ')
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' '),

					getTaskById: (id: string) => get().tasks.find((task) => task.id === id),
				})),
				{ name: 'taskStore' }
			)
		)
	)
)

export const filteredTasks = () => {
	const { search, tasks } = useStore()
	return tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
}
