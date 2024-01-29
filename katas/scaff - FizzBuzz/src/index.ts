export default function fizzBuzz(nums: number): string[] {
	let result: string[] = []
	const array = Array.from({length: nums}, (_, i) => i + 1);

	array.forEach((num) => {
		if (num % 3 !== 0 && num % 5 !== 0) {
			result.push(num.toString())
		} else if (num % 3 === 0 && num % 5 === 0) {
			result.push('FizzBuzz')
		} else if (num % 3 === 0 || num % 5 !== 0) {
			result.push('Fizz')
		} else if (num % 5 === 0 || num % 3 !== 0) {
			result.push('Buzz')
		} 
	})

	return result
}