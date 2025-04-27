import { getMeterColor } from '../utils/getMeterColor'

describe('getMeterColor Utility', () => {
	it('returns red for low values when not reversed', () => {
		expect(getMeterColor(10)).toBe('red')
	})

	it('returns yellow for medium values when not reversed', () => {
		expect(getMeterColor(50)).toBe('yellow')
	})

	it('returns green for high values when not reversed', () => {
		expect(getMeterColor(90)).toBe('green')
	})

	it('returns green for low values when reversed', () => {
		expect(getMeterColor(10, true)).toBe('green')
	})

	it('returns yellow for medium values when reversed', () => {
		expect(getMeterColor(50, true)).toBe('yellow')
	})

	it('returns red for high values when reversed', () => {
		expect(getMeterColor(90, true)).toBe('red')
	})
})
