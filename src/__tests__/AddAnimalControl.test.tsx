import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AddAnimalControl } from '../components/AddAnimalControl'

describe('AddAnimalControl Component', () => {
	it('renders the Add Animal button', () => {
		render(<AddAnimalControl onAddAnimal={jest.fn()} />)
		expect(screen.getByText('Add Animal')).toBeInTheDocument()
	})

	it('shows animal buttons when Add Animal is clicked', () => {
		render(<AddAnimalControl onAddAnimal={jest.fn()} />)
		fireEvent.click(screen.getByText('Add Animal'))
		expect(screen.getByText('Poodle')).toBeInTheDocument()
		expect(screen.getByText('Golden Retriever')).toBeInTheDocument()
	})

	it('calls onAddAnimal with the selected animal type', () => {
		const mockOnAddAnimal = jest.fn()
		render(<AddAnimalControl onAddAnimal={mockOnAddAnimal} />)
		fireEvent.click(screen.getByText('Add Animal'))
		fireEvent.click(screen.getByText('Poodle'))
		expect(mockOnAddAnimal).toHaveBeenCalledWith('poodle')
	})

	it('hides animal buttons when Cancel is clicked', () => {
		render(<AddAnimalControl onAddAnimal={jest.fn()} />)
		fireEvent.click(screen.getByText('Add Animal'))
		fireEvent.click(screen.getByText('Cancel'))
		expect(screen.queryByText('Poodle')).not.toBeInTheDocument()
	})
})
