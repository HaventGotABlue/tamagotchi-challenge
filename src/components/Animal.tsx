import React from 'react'
import { useState, useMemo } from 'react'
import { animals, AnimalData } from '../data/animal-data'
import '../styles/Animal.css'
import { useAnimalState } from '../hooks/useAnimalState'
import { Modal } from './Modal'
import AnimalStats from './AnimalStats'
import AnimalNameEditor from './AnimalNameEditor'

interface AnimalProps {
	animalType: string
	name?: string
	onRemove: () => void
}

export function Animal({
	animalType,
	name: initialName,
	onRemove,
}: AnimalProps) {
	const animalData: AnimalData = useMemo(
		() =>
			animals.find((animal: AnimalData) => animal.type === animalType) ||
			({} as AnimalData),
		[animalType],
	)

	const {
		hunger,
		setHunger,
		happiness,
		setHappiness,
		sleepiness,
		setSleepiness,
	} = useAnimalState(animalData)
	const [name, setName] = useState(initialName || '')
	const [showConfirm, setShowConfirm] = useState(false)

	const handleFeed = () => setHunger((prev: number) => Math.max(0, prev - 20))
	const handlePlay = () =>
		setHappiness((prev: number) => Math.min(100, prev + 20))
	const handleRest = () =>
		setSleepiness((prev: number) => Math.max(0, prev - 20))
	const handleRemoveClick = () => {
		setShowConfirm(true)
	}
	const confirmRemove = () => {
		onRemove()
		setShowConfirm(false)
	}
	const cancelRemove = () => {
		setShowConfirm(false)
	}

	return (
		<div className='animal-container'>
			<button className='remove-button' onClick={handleRemoveClick}>
				X
			</button>
			<Modal
				message='Are you sure you want to remove this animal?'
				onConfirm={confirmRemove}
				onCancel={cancelRemove}
				isVisible={showConfirm}
			/>
			<AnimalNameEditor
				initialName={name || animalData.defaultName}
				onNameChange={setName}
			/>
			<div className='animal-animal'>
				<img
					src={animalData.image}
					alt={animalData.type}
					className='animal-image'
				/>
			</div>
			<AnimalStats
				hunger={hunger}
				happiness={happiness}
				sleepiness={sleepiness}
				onFeed={handleFeed}
				onPlay={handlePlay}
				onRest={handleRest}
			/>
		</div>
	)
}

export default Animal
