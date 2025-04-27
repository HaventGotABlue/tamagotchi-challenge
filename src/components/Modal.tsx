import React, { useEffect, useRef } from 'react'
import '../styles/Animal.css'

interface ModalProps {
	message: string
	onConfirm: () => void
	onCancel: () => void
	isVisible: boolean
}

export function Modal({ message, onConfirm, onCancel, isVisible }: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!isVisible) return

		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onCancel()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isVisible, onCancel])

	if (!isVisible) return null

	return (
		<div className='modal-overlay'>
			<div className='modal' ref={modalRef}>
				<p>{message}</p>
				<button onClick={onConfirm}>Yes</button>
				<button onClick={onCancel}>No</button>
			</div>
		</div>
	)
}
