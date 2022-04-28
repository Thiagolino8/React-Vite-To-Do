import Search from '../components/Search'
import AddTask from '../components/AddTask'
import { filteredTasks } from '../store'
import TaskRender from '../components/RenderTask'

const Tasks = () => (
	<>
		{filteredTasks().map((task) => {
			return <TaskRender task={task} key={task.id} />
		})}
	</>
)

const TasksApp = () => {
	return (
		<>
			<h1>To Do List</h1>
			<Search />
			<AddTask />
			<Tasks />
		</>
	)
}

export default TasksApp
