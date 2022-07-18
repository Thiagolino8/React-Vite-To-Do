import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { CgClose, CgInfo, CgTrash } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import { useStore } from '../store';

import type { Task } from '../store'
interface Props {
	task: Task
}

const TaskRender = ({ task }: Props) => {
	const [value, setValue] = useState(task.title)
	const { deleteTask, toggleTask, updateTask, getTaskById, formatTaskTitle } = useStore()
	return (
		<div
			className={`${
				task.completed ? 'border-l-8 border-solid border border-lime-400' : ''
			} bg-zinc-700 px-1 py-2 my-3 flex rounded-md justify-between items-center`}
		>
			<div className='w-full pl-1 pr-2'>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onBlur={(e) => {
						if (formatTaskTitle(e.currentTarget.value) !== formatTaskTitle(task.title)) {
							updateTask(task.id, e.currentTarget.value)
						}
						setValue(getTaskById(task.id)?.title ?? '')
					}}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							e.currentTarget.blur()
						}
					}}
					className='w-full text-2xl font-bold text-left truncate input-ghost input focus:input-primary'
				/>
			</div>
			<div className='flex items-end gap-2'>
				<button className='btn btn-link hover:btn-primary swap swap-rotate' onClick={() => toggleTask(task.id)}>
					<input type='checkbox' checked={task.completed} />
					<CgClose className='fill-current swap-on' />
					<AiOutlineCheck className='fill-current swap-off' />
				</button>
				<button className='btn btn-link hover:btn-primary' onClick={() => deleteTask(task.id)}>
					<CgTrash />
				</button>
				<Link to={`/details/${task.title}`}>
					<button className='btn btn-link hover:btn-primary'>
						<CgInfo />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default TaskRender
