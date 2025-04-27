import React from 'react'
import { useState } from 'react'
import { animals, AnimalData } from '../data/animal-data'

interface AddAnimalControlProps {
	onAddAnimal: (animalType: string) => void
}

export function AddAnimalControl({ onAddAnimal }: AddAnimalControlProps) {
	const [isAddingAnimal, setIsAddingAnimal] = useState(false)

	const handleAddClick = () => {
		setIsAddingAnimal(true)
	}

	const handleAnimalSelect = (animalType: string) => {
		if (animalType) {
			onAddAnimal(animalType)
			setIsAddingAnimal(false)
		}
	}

	return (
		<div className='add-animal-control'>
			{!isAddingAnimal ? (
				<button onClick={handleAddClick}>Add Animal</button>
			) : (
				<div className='add-animal-buttons'>
					{animals.map((animal: AnimalData) => (
						<button
							key={animal.type}
							onClick={() => handleAnimalSelect(animal.type)}
							className='animal-button'
						>
							{animal.defaultName}
						</button>
					))}
					<button
						onClick={() => setIsAddingAnimal(false)}
						className='cancel-button'
					>
						Cancel
					</button>
				</div>
			)}
		</div>
	)
}

export default AddAnimalControl
