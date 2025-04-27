import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AnimalNameEditor from '../components/AnimalNameEditor'

describe('AnimalNameEditor Component', () => {
	it('renders the initial name correctly', () => {
		render(<AnimalNameEditor initialName='Fluffy' onNameChange={jest.fn()} />)
		expect(screen.getByText('Fluffy')).toBeInTheDocument()
	})

	it('allows editing the name', () => {
		render(<AnimalNameEditor initialName='Fluffy' onNameChange={jest.fn()} />)
		fireEvent.click(screen.getByText('Fluffy'))
		const input = screen.getByPlaceholderText(
			'Enter a name',
		) as HTMLInputElement
		fireEvent.change(input, { target: { value: 'Snowball' } })
		expect(input.value).toBe('Snowball')
	})

	it('saves the new name when Save is clicked', () => {
		const mockOnNameChange = jest.fn()
		render(
			<AnimalNameEditor initialName='Fluffy' onNameChange={mockOnNameChange} />,
		)
		fireEvent.click(screen.getByText('Fluffy'))
		const input = screen.getByPlaceholderText('Enter a name')
		fireEvent.change(input, { target: { value: 'Snowball' } })
		fireEvent.click(screen.getByText('Save'))
		expect(mockOnNameChange).toHaveBeenCalledWith('Snowball')
	})

	it('reverts to the previous name when Cancel is clicked', () => {
		render(<AnimalNameEditor initialName='Fluffy' onNameChange={jest.fn()} />)
		fireEvent.click(screen.getByText('Fluffy'))
		const input = screen.getByPlaceholderText('Enter a name')
		fireEvent.change(input, { target: { value: 'Snowball' } })
		fireEvent.click(screen.getByText('Cancel'))
		expect(screen.getByText('Fluffy')).toBeInTheDocument()
	})
})
