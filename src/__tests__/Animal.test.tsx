import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Animal } from '../components/Animal'

jest.mock('../data/animal-data', () => ({
	animals: [
		{
			type: 'poodle',
			defaultName: 'Poodle',
			image: 'poodle.gif',

			multipliers: { hunger: 1, happiness: 1, sleep: 1 },
			initialState: { hunger: 50, happiness: 50, sleepiness: 50 },
		},
		{
			type: 'tabby-cat',
			defaultName: 'Tabby Cat',
			image: 'tabby-cat.gif',
			multipliers: { hunger: 1, happiness: 1, sleep: 1 },
			initialState: { hunger: 50, happiness: 50, sleepiness: 50 },
		},
	],
}))

const mockSetHunger = jest.fn()
const mockSetHappiness = jest.fn()
const mockSetSleepiness = jest.fn()

jest.mock('../hooks/useAnimalState', () => ({
	useAnimalState: () => ({
		hunger: 50,
		setHunger: mockSetHunger,
		happiness: 50,
		setHappiness: mockSetHappiness,
		sleepiness: 50,
		setSleepiness: mockSetSleepiness,
	}),
	mockSetHunger,
	mockSetHappiness,
	mockSetSleepiness,
}))

describe('Animal Component', () => {
	it('renders the animal with default props', () => {
		render(<Animal animalType='poodle' onRemove={jest.fn()} />)
		expect(screen.getByText('Poodle')).toBeInTheDocument()
		expect(screen.getByAltText('poodle')).toBeInTheDocument()
	})

	it('shows confirmation dialog when removing an animal', () => {
		render(<Animal animalType='poodle' onRemove={jest.fn()} />)
		fireEvent.click(screen.getByText('X'))
		expect(
			screen.getByText('Are you sure you want to remove this animal?'),
		).toBeInTheDocument()
	})

	it('closes the confirmation modal when No is clicked', () => {
		render(<Animal animalType='poodle' onRemove={jest.fn()} />)
		fireEvent.click(screen.getByText('X'))
		fireEvent.click(screen.getByText('No'))
		expect(
			screen.queryByText('Are you sure you want to remove this animal?'),
		).not.toBeInTheDocument()
	})

	it('removes the animal when Yes is clicked in the confirmation modal', () => {
		const mockOnRemove = jest.fn()
		render(<Animal animalType='poodle' onRemove={mockOnRemove} />)
		fireEvent.click(screen.getByText('X'))
		fireEvent.click(screen.getByText('Yes'))
		expect(mockOnRemove).toHaveBeenCalled()
	})

	it('allows multiple animals of different types', () => {
		render(
			<>
				<Animal animalType='poodle' onRemove={jest.fn()} />
				<Animal animalType='tabby-cat' onRemove={jest.fn()} />
			</>,
		)
		expect(screen.getByText('Poodle')).toBeInTheDocument()
		expect(screen.getByText('Tabby Cat')).toBeInTheDocument()
	})

	it('handles feeding the animal correctly', () => {
		render(<Animal animalType='poodle' onRemove={jest.fn()} />)

		fireEvent.click(screen.getByText('Feed'))
		expect(mockSetHunger).toHaveBeenCalledWith(expect.any(Function))
	})

	it('handles playing with the animal correctly', () => {
		render(<Animal animalType='poodle' onRemove={jest.fn()} />)

		fireEvent.click(screen.getByText('Play'))
		expect(mockSetHappiness).toHaveBeenCalledWith(expect.any(Function))
	})

	it('handles resting the animal correctly', () => {
		render(<Animal animalType='poodle' onRemove={jest.fn()} />)

		fireEvent.click(screen.getByText('Rest'))
		expect(mockSetSleepiness).toHaveBeenCalledWith(expect.any(Function))
	})

	it('shows and hides the confirmation modal when removing an animal', () => {
		render(<Animal animalType='poodle' onRemove={jest.fn()} />)

		fireEvent.click(screen.getByText('X'))
		expect(
			screen.getByText('Are you sure you want to remove this animal?'),
		).toBeInTheDocument()

		fireEvent.click(screen.getByText('No'))
		expect(
			screen.queryByText('Are you sure you want to remove this animal?'),
		).not.toBeInTheDocument()
	})
})
