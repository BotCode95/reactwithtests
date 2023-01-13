import { Task as TaskType } from '../../types/task'

interface Props {
	task: TaskType
	bgStatus: string
}

export const Task = ({ task, bgStatus }: Props) => {
	return (
		<div style={{ paddingLeft: '2rem' }}>
			<p>{task.title}</p>
			<span style={{ backgroundColor: bgStatus }}>{task.status}</span>
		</div>
	)
}
