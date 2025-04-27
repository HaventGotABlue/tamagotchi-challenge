import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Modal } from '../components/Modal'

describe('Modal Component', () => {
	it('renders the modal with the correct message', () => {
		render(
			<Modal
				message='Are you sure?'
				onConfirm={jest.fn()}
				onCancel={jest.fn()}
				isVisible={true}
			/>,
		)
		expect(screen.getByText('Are you sure?')).toBeInTheDocument()
	})

	it('calls onConfirm when the Yes button is clicked', () => {
		const mockOnConfirm = jest.fn()
		render(
			<Modal
				message='Are you sure?'
				onConfirm={mockOnConfirm}
				onCancel={jest.fn()}
				isVisible={true}
			/>,
		)
		fireEvent.click(screen.getByText('Yes'))
		expect(mockOnConfirm).toHaveBeenCalled()
	})

	it('calls onCancel when the No button is clicked', () => {
		const mockOnCancel = jest.fn()
		render(
			<Modal
				message='Are you sure?'
				onConfirm={jest.fn()}
				onCancel={mockOnCancel}
				isVisible={true}
			/>,
		)
		fireEvent.click(screen.getByText('No'))
		expect(mockOnCancel).toHaveBeenCalled()
	})

	it('sets isVisible to false when clicking outside of the modal', () => {
		const mockOnCancel = jest.fn()
		render(
			<Modal
				message='Are you sure?'
				onConfirm={jest.fn()}
				onCancel={mockOnCancel}
				isVisible={true}
			/>,
		)
		fireEvent.mouseDown(document.body)
		expect(mockOnCancel).toHaveBeenCalled()
	})
})
