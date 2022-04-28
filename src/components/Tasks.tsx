import { filteredTasks } from '../store'
import TaskRender from './RenderTask'

export const Tasks = () => (
	<>
		{filteredTasks().map((task) => {
			return <TaskRender task={task} key={task.id} />
		})}
	</>
)
