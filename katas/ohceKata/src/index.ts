export default function ohce(str: string, timeOfDay?: number) {
	let answer = ''
	const name = str.split(' ')[1];

	if (name) {
		//const timeOfDay = new Date().getHours();
		if (timeOfDay > 6 && timeOfDay < 12) {
			answer = `¡Buenos días ${name}!`
		} else if (timeOfDay >= 12 && timeOfDay < 20) {
			answer = `¡Buenos tardes ${name}!`
		} else {
			answer = `¡Buenos noches ${name}!`
		}
	
	} else {
		const reversedStr = str.split('').reverse().join('');
		if(reversedStr === str) {
			answer = `${reversedStr} \n ¡Bonita palabra!`
		} else {
			answer = reversedStr
		}
	}
	
	if (str === 'Stop!') {
		answer = `Adios`
	}

	return answer;
}