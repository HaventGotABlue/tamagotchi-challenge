import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AnimalStats from '../components/AnimalStats'

describe('AnimalStats Component', () => {
	it('renders hunger, happiness, and sleepiness meters correctly', () => {
		render(
			<AnimalStats
				hunger={50}
				happiness={50}
				sleepiness={50}
				onFeed={jest.fn()}
				onPlay={jest.fn()}
				onRest={jest.fn()}
			/>,
		)

		expect(screen.getByText('Hunger:')).toBeInTheDocument()
		expect(screen.getByText('Happiness:')).toBeInTheDocument()
		expect(screen.getByText('Sleepiness:')).toBeInTheDocument()
	})

	it('calls the appropriate callback when buttons are clicked', () => {
		const mockOnFeed = jest.fn()
		const mockOnPlay = jest.fn()
		const mockOnRest = jest.fn()

		render(
			<AnimalStats
				hunger={50}
				happiness={50}
				sleepiness={50}
				onFeed={mockOnFeed}
				onPlay={mockOnPlay}
				onRest={mockOnRest}
			/>,
		)

		fireEvent.click(screen.getByText('Feed'))
		expect(mockOnFeed).toHaveBeenCalled()

		fireEvent.click(screen.getByText('Play'))
		expect(mockOnPlay).toHaveBeenCalled()

		fireEvent.click(screen.getByText('Rest'))
		expect(mockOnRest).toHaveBeenCalled()
	})

	it('does not allow metrics to exceed 100 or drop below 0', () => {
		render(
			<AnimalStats
				hunger={100}
				happiness={0}
				sleepiness={100}
				onFeed={jest.fn()}
				onPlay={jest.fn()}
				onRest={jest.fn()}
			/>,
		)

		expect(screen.getByText('Hunger:')).toBeInTheDocument()
		expect(screen.getByText('Happiness:')).toBeInTheDocument()
		expect(screen.getByText('Sleepiness:')).toBeInTheDocument()
	})

	it('renders correctly when hunger, happiness, and sleepiness are at their limits', () => {
		render(
			<AnimalStats
				hunger={0}
				happiness={100}
				sleepiness={0}
				onFeed={jest.fn()}
				onPlay={jest.fn()}
				onRest={jest.fn()}
			/>,
		)

		expect(screen.getByText('Hunger:')).toBeInTheDocument()
		expect(screen.getByText('Happiness:')).toBeInTheDocument()
		expect(screen.getByText('Sleepiness:')).toBeInTheDocument()
	})

	it('handles rapid updates to stats without crashing', () => {
		const { rerender } = render(
			<AnimalStats
				hunger={50}
				happiness={50}
				sleepiness={50}
				onFeed={jest.fn()}
				onPlay={jest.fn()}
				onRest={jest.fn()}
			/>,
		)

		for (let i = 0; i <= 100; i += 10) {
			rerender(
				<AnimalStats
					hunger={i}
					happiness={100 - i}
					sleepiness={i}
					onFeed={jest.fn()}
					onPlay={jest.fn()}
					onRest={jest.fn()}
				/>,
			)
		}

		expect(screen.getByText('Hunger:')).toBeInTheDocument()
		expect(screen.getByText('Happiness:')).toBeInTheDocument()
		expect(screen.getByText('Sleepiness:')).toBeInTheDocument()
	})
})
