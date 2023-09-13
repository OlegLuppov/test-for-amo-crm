import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import App from './components/app/App'

describe('TEST APP', () => {
	render(<App />)

	test('render buttons and input Secons', () => {
		const buttonTaskOne = screen.getByText(/task_1/i)
		const buttonTaskTwo = screen.getByText(/task_2/i)
		const buttonStart = screen.getByText(/Start/i)
		const inputSeconds = screen.getByPlaceholderText(/Seconds/i)

		expect(buttonTaskOne).toBeInTheDocument()
		expect(buttonTaskTwo).toBeInTheDocument()
		expect(buttonStart).toBeInTheDocument()
		expect(inputSeconds).toBeInTheDocument()

		expect(inputSeconds).toMatchSnapshot()
	})

	test('No elements', () => {
		const helloWorld = screen.queryByText(/Hello World/i)
		expect(helloWorld).toBeNull()
	})
})
