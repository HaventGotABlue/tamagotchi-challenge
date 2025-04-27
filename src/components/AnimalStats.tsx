import React from 'react'
import { getMeterColor } from '../utils/getMeterColor'

interface AnimalStatsProps {
	hunger: number
	happiness: number
	sleepiness: number
	onFeed: () => void
	onPlay: () => void
	onRest: () => void
}

const AnimalStats = ({
	hunger,
	happiness,
	sleepiness,
	onFeed,
	onPlay,
	onRest,
}: AnimalStatsProps) => (
	<div className='animal-stats'>
		<div className='stat'>
			<strong>Hunger:</strong>
			<div className='meter'>
				<div
					className='meter-fill'
					style={{
						width: `${hunger}%`,
						backgroundColor: getMeterColor(hunger, true),
					}}
				></div>
			</div>
			<button className='action-button' onClick={onFeed}>
				Feed
			</button>
		</div>
		<div className='stat'>
			<strong>Happiness:</strong>
			<div className='meter'>
				<div
					className='meter-fill'
					style={{
						width: `${happiness}%`,
						backgroundColor: getMeterColor(happiness),
					}}
				></div>
			</div>
			<button className='action-button' onClick={onPlay}>
				Play
			</button>
		</div>
		<div className='stat'>
			<strong>Sleepiness:</strong>
			<div className='meter'>
				<div
					className='meter-fill'
					style={{
						width: `${sleepiness}%`,
						backgroundColor: getMeterColor(sleepiness, true),
					}}
				></div>
			</div>
			<button className='action-button' onClick={onRest}>
				Rest
			</button>
		</div>
	</div>
)

export default AnimalStats
