export interface AnimalData {
	type: string
	defaultName: string
	image: string
	multipliers: {
		hunger: number
		happiness: number
		sleep: number
	}
	initialState: {
		hunger: number
		happiness: number
		sleepiness: number
	}
}

export const animals: AnimalData[] = [
	{
		type: 'poodle',
		defaultName: 'Poodle',
		image: 'src/assets/images/poodle.gif',
		multipliers: {
			hunger: 1.2,
			happiness: 1.5,
			sleep: 1.0,
		},
		initialState: {
			hunger: 50,
			happiness: 50,
			sleepiness: 50,
		},
	},
	{
		type: 'golden-retriever',
		defaultName: 'Golden Retriever',
		image: 'src/assets/images/golden-retriever.gif',
		multipliers: {
			hunger: 1.3,
			happiness: 1.8,
			sleep: 1.1,
		},
		initialState: {
			hunger: 50,
			happiness: 50,
			sleepiness: 50,
		},
	},
	{
		type: 'black-cat',
		defaultName: 'Black Cat',
		image: 'src/assets/images/black-cat.gif',
		multipliers: {
			hunger: 1.5,
			happiness: 1.4,
			sleep: 1.2,
		},
		initialState: {
			hunger: 50,
			happiness: 50,
			sleepiness: 50,
		},
	},
	{
		type: 'tabby-cat',
		defaultName: 'Tabby Cat',
		image: 'src/assets/images/tabby-cat.gif',
		multipliers: {
			hunger: 1.1,
			happiness: 1.6,
			sleep: 1.3,
		},
		initialState: {
			hunger: 50,
			happiness: 50,
			sleepiness: 50,
		},
	},
	{
		type: 'parrot',
		defaultName: 'Parrot',
		image: 'src/assets/images/parrot.gif',
		multipliers: {
			hunger: 1.0,
			happiness: 2.0,
			sleep: 0.9,
		},
		initialState: {
			hunger: 50,
			happiness: 50,
			sleepiness: 50,
		},
	},
]

export {}
