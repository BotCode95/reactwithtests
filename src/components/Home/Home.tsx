import { Grid } from '@mui/material'
import React from 'react'
import { Tasks } from '../Tasks/Tasks'
import tasks from '../../data/tasks.json'
export const Home = () => {
	return (
		<Grid container>
			<Grid item xs={12} md={4}>
				<Tasks tasks={tasks} status={'To do'} />
			</Grid>
			<Grid item xs={12} md={4}>
				<Tasks tasks={tasks} status={'In progress'} />
			</Grid>
			<Grid item xs={12} md={4}>
				<Tasks tasks={tasks} status={'Done'} />
			</Grid>
		</Grid>
	)
}
