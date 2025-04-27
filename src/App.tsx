import { useState } from 'react'
import './styles/Global.css'
import Animal from './components/Animal'
import AddAnimalControl from './components/AddAnimalControl'

interface AnimalEntry {
	type: string
	id: number
}

function App() {
	const [animalList, setAnimalList] = useState<AnimalEntry[]>([])

	const handleAddAnimal = (animalType: string) => {
		setAnimalList((prev) => [...prev, { type: animalType, id: Date.now() }])
	}

	const handleRemoveAnimal = (id: number) => {
		setAnimalList((prev) => prev.filter((animal) => animal.id !== id))
	}

	return (
		<div className='animal-page'>
			<AddAnimalControl onAddAnimal={handleAddAnimal} />
			<div className='animal-wrapper'>
				{animalList.map((animal) => (
					<Animal
						key={animal.id}
						animalType={animal.type}
						onRemove={() => handleRemoveAnimal(animal.id)}
					/>
				))}
			</div>
		</div>
	)
}

export default App
