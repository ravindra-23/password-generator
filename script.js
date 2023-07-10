// Selectors

const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeSymbolsElement = document.getElementById('includeSymbols');
const includeNumbersElement = document.getElementById('includeNumbers');
const passwordDisplay = document.getElementById('passwordDisplay');

const UPPERCASE_CHAR_CODES = arrayLowToHigh(65,90);
const LOWERCASE_CHAR_CODES = arrayLowToHigh(97,122);
const NUMBERS_CHAR_CODES = arrayLowToHigh(48,57);
const SYMBOLS_CHAR_CODES = arrayLowToHigh(33,47).concat(arrayLowToHigh(58,64)).concat(arrayLowToHigh(91,96)).concat(arrayLowToHigh(123,126));


// Event Listeners

characterAmountRange.addEventListener('input', syncAmount);
characterAmountNumber.addEventListener('input', syncAmount);

form.addEventListener('submit', e => {
	e.preventDefault();
	const characterAmount = characterAmountRange.value;
	const includeUppercase = includeUppercaseElement.checked
	const includeNumbers = includeNumbersElement.checked
	const includeSymbols = includeSymbolsElement.checked

	
	const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
	passwordDisplay.innerText = password;
});
	

// Functions

// function to synch range and input number
function syncAmount(e) {
	const value = e.target.value;

	characterAmountRange.value = value;
	characterAmountNumber.value = value;
}

// function to generate password
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
	let charCodes = LOWERCASE_CHAR_CODES
	if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
	if(includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
	if(includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

	const passwordCharacters = [];

	for(let i=0; i < characterAmount; i++) {
		const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
		console.log(characterCode)
		passwordCharacters.push(String.fromCharCode(characterCode))
	}
	console.log(passwordCharacters)
	return passwordCharacters.join('')
}

// function to get array of character code
function arrayLowToHigh(low, high) {
	const array = [];
	for(let i=low; i<=high; i++) {
		array.push(i)
	}
	return array;
}