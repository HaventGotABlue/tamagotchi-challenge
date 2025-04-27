import { useState, useEffect } from 'react'
import { AnimalData } from '../data/animal-data'

export const useAnimalState = (animalData: AnimalData) => {
	const [hunger, setHunger] = useState(animalData.initialState?.hunger || 0)
	const [happiness, setHappiness] = useState(
		animalData.initialState?.happiness || 0,
	)
	const [sleepiness, setSleepiness] = useState(
		animalData.initialState?.sleepiness || 0,
	)

	useEffect(() => {
		if (!animalData.type) return

		const interval = setInterval(() => {
			setHunger((prev) => Math.min(100, prev + animalData.multipliers.hunger))
			setHappiness((prev) =>
				Math.max(
					0,
					prev -
						animalData.multipliers.happiness *
							(hunger >= 100 || sleepiness >= 100 ? 5 : 1),
				),
			)
			setSleepiness((prev) =>
				Math.min(100, prev + animalData.multipliers.sleep),
			)
		}, 1000)

		return () => clearInterval(interval)
	}, [hunger, sleepiness, animalData])

	return {
		hunger,
		setHunger,
		happiness,
		setHappiness,
		sleepiness,
		setSleepiness,
	}
}
