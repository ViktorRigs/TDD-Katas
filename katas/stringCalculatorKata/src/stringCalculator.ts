export class StringCalculator {

	public add(str: string): number {
		let result = 0;
		const negatives: string[] = []

		if (str.length !== 0) {
			str.replace(/[^0-9-]/g, ',').split(',').forEach(num => {
				if (num[0] === '-') negatives.push(num)
				if (Number(num) < 1000) result += Number(num)
			})
		}

		if (negatives.length > 0) {
			throw new Error(`negatives not allowed - ${negatives.join(';')}`)
		}

		return result
	}
}


