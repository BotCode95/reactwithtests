import React from 'react'
import { render } from '@testing-library/react'
import { Tasks } from '../components/Tasks/Tasks'
test('should be render a list of tasks', () => {
	const tasks = [
		{
			_id: '639e0950918581e0e0910bb7',
			title: 'Crear un proyecto',
			description: 'descripcion de prueba',
			priority: 1,
			status: 'In progress',
		},
		{
			_id: '639e0981918581e0e0910bba',
			title: 'Crear un componente en react',
			description: 'componente formulario',
			priority: 3,
			status: 'In progress',
		},
	]
	const component = render(<Tasks tasks={tasks} status={'In progress'} />)

	console.log(component)
})
