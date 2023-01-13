import { useEffect, useMemo } from 'react'
import { Task as TaskType } from '../../types/task'

import { Task } from './Task'
import { useState } from 'react'

interface Props {
	tasks: TaskType[]
	status: string
}

export const Tasks = ({ tasks, status }: Props) => {
	const tasksByStatus: TaskType[] = useMemo<TaskType[]>(
		() => tasks.filter((task) => task.status === status),
		[tasks]
	)

	const [bgColor, setbgColor] = useState<string>('#D4D4AA')
	useEffect(() => {
		if (status === 'To do') {
			setbgColor('#AAFFDD')
		} else if (status === 'Done') {
			setbgColor('#BBDDEE')
		}
	}, [status])

	return (
		<div style={{ minWidth: 400 }}>
			<h1>Tasks {status}</h1>
			{tasksByStatus.map((task) => (
				<Task key={task._id} task={task} bgStatus={bgColor} />
			))}
		</div>
	)
}
