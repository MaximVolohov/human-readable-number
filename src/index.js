module.exports = function toReadable (number) {
	let zero = 'zero';
	let unity = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let dozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let other = ['hundred', 'thousand'];

	let numberStr = number.toString();

	if (number == 0) return zero;
	else if (number < 10) return unity[number];
	else if (number < 20) return dozens[numberStr[1]];
	else if (number < 100) return (`${tens[numberStr[0]]} ` + unity[numberStr[1]]).trim();
	else if (number < 1000) {
		let result = `${unity[numberStr[0]]} ` + other[0];
		
		if (numberStr.slice(1) == 0) {
			return result;
		} else if (numberStr.slice(1) < 10) {
			return result + ` ${unity[numberStr[2]]}`;
		} else if (numberStr.slice(1) < 20) {
			return result + ` ${dozens[numberStr[2]]}`;
		} else {
			return (result + ` ${tens[numberStr[1]]} ` + unity[numberStr[2]]).trim();
		}
	} else return unity[1] + other[1];
}
