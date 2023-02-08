import React from 'react'
import { render, screen } from '@testing-library/react'
import { Task } from '../components/Tasks/Task'
import '@testing-library/jest-dom'

describe('Tasks Component', () => {
	const task = {
		_id: '639e0950918581e0e0910bb7',
		title: 'Crear un proyecto',
		description: 'descripcion de prueba',
		priority: 1,
		status: 'In progress',
	}

	let taskRender: any
	beforeEach(() => {
		render(<Task task={task} bgStatus={'#BBdd44'} />)
		taskRender = screen.getByText('Crear un proyecto')
	})

	test('should be render a task with title and status', () => {
		expect(taskRender).toBeInTheDocument()

		// component.getByText('Crear un proyecto')
		// component.getByText('In progress')
	})

	// test('should be render a task with padding', () => {
	// 	const div = screen.getByRole('div')
	// 	expect(div).toHaveStyle({
	// 		paddingLeft: '2rem',
	// 	})
	// })
})
