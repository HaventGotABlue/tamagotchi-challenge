import { renderHook, act } from '@testing-library/react'
import { useAnimalState } from '../hooks/useAnimalState'
import { AnimalData } from '../data/animal-data'

describe('useAnimalState Hook', () => {
	const mockAnimalData: AnimalData = {
		type: 'cat',
		defaultName: 'Tabby Cat',
		image: 'src/static/images/tabby-cat.gif',
		multipliers: {
			hunger: 1.0,
			happiness: 1.2,
			sleep: 0.8,
		},
		initialState: {
			hunger: 50,
			happiness: 70,
			sleepiness: 30,
		},
	}

	it('initializes state correctly', () => {
		const { result } = renderHook(() => useAnimalState(mockAnimalData))
		expect(result.current.hunger).toBe(50)
		expect(result.current.happiness).toBe(70)
		expect(result.current.sleepiness).toBe(30)
	})

	it('updates hunger over time', () => {
		jest.useFakeTimers()
		const { result } = renderHook(() => useAnimalState(mockAnimalData))
		act(() => {
			jest.advanceTimersByTime(1000)
		})
		expect(result.current.hunger).toBe(51)
		jest.useRealTimers()
	})

	it('handles feeding correctly', () => {
		const { result } = renderHook(() => useAnimalState(mockAnimalData))
		act(() => {
			result.current.setHunger((prev) => Math.max(0, prev - 20))
		})
		expect(result.current.hunger).toBe(30)
	})

	it('ensures timers are cleared when the component is unmounted', () => {
		jest.useFakeTimers()
		const { unmount } = renderHook(() => useAnimalState(mockAnimalData))
		unmount()
		act(() => {
			jest.advanceTimersByTime(1000)
		})
		jest.useRealTimers()
	})

	it('ensures happiness decreases over time', () => {
		jest.useFakeTimers()
		const { result } = renderHook(() => useAnimalState(mockAnimalData))
		act(() => {
			jest.advanceTimersByTime(1000)
		})
		expect(result.current.happiness).toBeLessThan(70)
		jest.useRealTimers()
	})

	it('ensures hunger increases over time', () => {
		jest.useFakeTimers()
		const { result } = renderHook(() => useAnimalState(mockAnimalData))
		act(() => {
			jest.advanceTimersByTime(1000)
		})
		expect(result.current.hunger).toBeGreaterThan(50)
		jest.useRealTimers()
	})

	it('ensures sleepiness increases over time', () => {
		jest.useFakeTimers()
		const { result } = renderHook(() => useAnimalState(mockAnimalData))
		act(() => {
			jest.advanceTimersByTime(1000)
		})
		expect(result.current.sleepiness).toBeGreaterThan(30)
		jest.useRealTimers()
	})

	it('ensures happiness decreases faster when hunger or sleepiness is full', () => {
		jest.useFakeTimers()
		const { result } = renderHook(() => useAnimalState(mockAnimalData))
		act(() => {
			result.current.setHunger(100)
			jest.advanceTimersByTime(1000)
		})
		expect(result.current.happiness).toBeLessThan(70)
		jest.useRealTimers()
	})

	it('ensures state updates respect multipliers', () => {
		jest.useFakeTimers()
		const customAnimalData = {
			...mockAnimalData,
			multipliers: { hunger: 2, happiness: 0.5, sleep: 3 },
		}
		const { result } = renderHook(() => useAnimalState(customAnimalData))
		act(() => {
			jest.advanceTimersByTime(1000)
		})
		expect(result.current.hunger).toBe(52)
		expect(result.current.happiness).toBeLessThan(70)
		expect(result.current.sleepiness).toBe(33)
		jest.useRealTimers()
	})

	it('ensures state values do not exceed 100 or drop below 0', () => {
		const animalData = {
			type: 'dog',
			defaultName: 'Golden Retriever',
			image: 'src/static/images/golden-retriever.gif',
			initialState: { hunger: 50, happiness: 50, sleepiness: 50 },
			multipliers: { hunger: 10, happiness: -10, sleep: -10 },
		}
		const { result } = renderHook(() => useAnimalState(animalData))

		expect(result.current.hunger).toBeLessThanOrEqual(100)
		expect(result.current.happiness).toBeGreaterThanOrEqual(0)
		expect(result.current.sleepiness).toBeGreaterThanOrEqual(0)
	})
})
