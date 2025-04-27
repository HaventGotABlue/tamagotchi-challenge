export const getMeterColor = (
	value: number,
	reverse: boolean = false,
): string => {
	if (reverse) {
		if (value < 33) return 'green'
		if (value < 66) return 'yellow'
		return 'red'
	} else {
		if (value < 33) return 'red'
		if (value < 66) return 'yellow'
		return 'green'
	}
}
