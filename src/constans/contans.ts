export const formatedSecondInTime = (seconds: number) => {
	if (!seconds || seconds === 0) return '00:00:00'
	let time: string

	time = new Date(seconds * 1000).toISOString().substring(11, 19)
	return time
}
