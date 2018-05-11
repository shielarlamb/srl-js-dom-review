//Form where user can enter the name when found in local storage
const formWelcome = document.getElementById("newUserForm");
const welcomeMsg = document.getElementById("welcome-msg");
const welcomeName = document.getElementById("name");
let message = "";
let i = 0;
const newUserButton = document.getElementById("new-user-btn");





function removeChildren(element) {
	const children = element.children;
	for (let i = 0; i < children.length; i++) {
		let current = children[i];
		element.removeChild(current);
	}
}


//output the name in the Welcome to JS-Dom line after clicking enter.
const outputName = document.getElementById("output-name");
const userName = document.getElementById("user-name");
const enterButton = document.getElementById("enter-btn");
const newUserForm = document.getElementById("new-user")
const inputName = userName.value;
const outputNTarget = document.createElement("p");
const notUser = document.getElementById("not-user");
const outName = document.createElement("span");
/*
let setUser = localStorage.setItem("User", outputNTarget.textContent);
let getUser = localStorage.getItem("User");
*/


//enter page and save username in local storage. Enter button
enterButton.addEventListener("click", function () {
	removeChildren(outputName);

/*	let userArray = [];
		
	let userElements = outputName.children;
	for (let i=0; i<userElements.length; i++) {
		let userListElements = userElements[i];
		let span = userListElements.children[0];
		userArray.push(span.textContent);
		
	}
	
	let storedUser = localStorage.setItem("User", JSON.stringify(userArray));
	*/
	const inputName = userName.value;
	const outputNTarget = document.createElement("p");
	outputName.appendChild(outputNTarget);
	
	message = userName.value;
	const outName = document.createElement("span");
	const nameText = document.createTextNode(message);
	outName.appendChild(nameText);
	outputNTarget.appendChild(outName);
	
	let storedUser = localStorage.setItem("User", outName.textContent);
	let userStr = localStorage.getItem("User");
	console.log(userStr);
	
});


/*

loadUserFromStorage();

function loadUserFromStorage() {

let userStr = localStorage.getItem("User");
	console.log(userStr);

	if (userStr != null) {
		 let storedArray = JSON.parse(userStr)
		for(let i=0; i<storedArray.length; i++) {
			saveUser(storedArray[i]);
		}
			
	}
}
*/



const inputCount = document.getElementById("max");
const countButton = document.getElementById("btn-count");
const outputWhileCount = document.getElementById("counting-output-while");
const outputForCount = document.getElementById("counting-output-for");


//Counting with loops
countButton.addEventListener("click", function () {

	const inputMax = inputCount.value;
	const outputWhileCount = document.getElementById("counting-output-while");
	removeChildren(outputWhileCount);

	const outputForCount = document.getElementById("counting-output-for");
	removeChildren(outputForCount);
	
	countUp(inputMax);
	countDown(inputMax);
	
});
	

function countUp(inputMax)
	{

	//WHILE count-up

	const countWhileTargetUp = document.createElement("ul");
	outputWhileCount.appendChild(countWhileTargetUp);
	removeChildren(countWhileTargetUp);

	//FOR count-up

	const countForTargetUp = document.createElement("ul");
	outputForCount.appendChild(countForTargetUp);
	removeChildren(countForTargetUp);

	let message = "";
	let count = 0;

	while (inputMax > count) {

		count += 2;
		message = "";
		if (message === "") {
			message = count;
		const countWhileMaxListUp = document.createElement("li");
		const maxWhileListResultUp = document.createTextNode(message);

		countWhileMaxListUp.appendChild(maxWhileListResultUp);
		countWhileTargetUp.appendChild(countWhileMaxListUp);
		}

	}

	for (let count = 2; count <= inputMax; count = count + 2) {
		
			message = count;

			const countForMaxListUp = document.createElement("li");
			const maxForListResultUp = document.createTextNode(message);

			countForMaxListUp.appendChild(maxForListResultUp);
			countForTargetUp.appendChild(countForMaxListUp);
			
		}

	};


function countDown(inputMax) 
	{

	//WHILE count down
	const countWhileTargetDown = document.createElement("ul");
	outputWhileCount.appendChild(countWhileTargetDown);
 	removeChildren(countWhileTargetDown);

	//FOR count down
	const countForTargetDown = document.createElement("ul");
	outputForCount.appendChild(countForTargetDown);
	removeChildren(countForTargetDown);

	let message = "";
	let count = inputCount.value;

	while (count >= 2) {
		count -= 2;
		message = "";

		if (message === "") {
			message = count+2 ;
		

		const countWhileMaxListDown = document.createElement("li");
		const maxWhileListResultDown = document.createTextNode(message);

		countWhileMaxListDown.appendChild(maxWhileListResultDown);
		countWhileTargetDown.appendChild(countWhileMaxListDown);
	
		}

	};



	for (let count = inputCount.value; count >= 2; count -= 2) {
		
			message =count;

			const countForMaxListDown = document.createElement("li");
			const maxForListResultDown = document.createTextNode(message);

			countForMaxListDown.appendChild(maxForListResultDown);
			countForTargetDown.appendChild(countForMaxListDown);
			
		
	}

};
	
	


////function to enter the name in paragraph

const negativeButton = document.getElementById("btn-test-neg");
const inputNegative = document.getElementById("test-num");
const outputElNegative = document.getElementById("test-neg-output");

//function that checks if the input number is negative. Check value button
negativeButton.addEventListener("click", function () {
	removeChildren(outputElNegative);

	const inputValue = inputNegative.value;
	const outputTarget = document.createElement("p");
	outputElNegative.appendChild(outputTarget);

	let outputPos = "Positive number!";
	let outputNeg = "Negative number!";
	let count = 0;


	if (inputValue > 0) {
		message = outputPos;
		console.log(outputPos);

	} else {

		message = outputNeg;
		console.log(outputNeg);
	}

	const outputList = document.createElement("li");
	const resultText = document.createTextNode(message);
	outputList.appendChild(resultText);
	outputTarget.appendChild(outputList);

});


//hide the vowels
const outputElVowels = document.getElementById("hide-vowels-output");
const inputElVowels = document.getElementById("hide-vowels-word");
const buttonVowels = document.getElementById("btn-hide-vowels");

const inputVowels = inputElVowels.value;
const outVTarget = document.createElement("p");
outputElVowels.appendChild(outVTarget);



//function for the Hide vowels button
buttonVowels.addEventListener("click", function (text) {
	removeChildren(outputElVowels);
	
	message = inputElVowels.value; //match.replaceAll(/[aAeEiIoOuU]/gi, "*");
	const inputVowels = inputElVowels.value;
	const outVTarget = document.createElement("p");
	outputElVowels.appendChild(outVTarget);
	
	const outputV = document.createElement("li");
	const resultVowels = document.createTextNode(message);
	
	//let noVowels = outputElNegative.replaceAll(/[aAeEiIoOuU]/g,"*");
	
	
	
	outputV.appendChild(resultVowels);
	outVTarget.appendChild(outputV);
	
	//console.log(inputElVowels.replace(/[aAeEiIoOuU]/g, "*"));
	
		
	
	/*let vowelshide = "aeiouAEIOU".split("");
	console.log(vowelshide);
	*/

});


// function to phrase to array, letters, vowels and consonant counting.

const inputArea = document.getElementById("arr-strings-word");
const processButton = document.getElementById("btn-process-me");
const outputProcess = document.getElementById("arr-strings-output");
removeChildren(outputProcess);
const inputPhrase = inputArea.value.split("");
const outputPhraseTarget = document.createElement("ul");
outputProcess.appendChild(outputPhraseTarget);

processButton.addEventListener("click", function () {

	const inputPhrase = inputArea.value;
	const outputProcess = document.getElementById("arr-strings-output");
	removeChildren(outputProcess);
		
	phraseArr();
	countWords();
	countLetters();
	countVowels();
	countConsonants();
	
});

//phrase output
function phraseArr() {


message = "Your phrase: "+inputArea.value.split(" ").join(" ");
const outputPhraseTarget = document.createElement("ul");
outputProcess.appendChild(outputPhraseTarget);

const phraseOutput = document.createElement("li");
const phraseResult = document.createTextNode(message);

phraseOutput.appendChild(phraseResult);
outputPhraseTarget.appendChild(phraseOutput);
 

}

//how many words in the phras
function countWords() {
	
	message = "Number of words: " +inputArea.value.split(" ").join(" ");
	const outputPhraseTarget = document.createElement("ul");
	outputProcess.appendChild(outputPhraseTarget);
	
	const outputWord = document.createElement("li");
	const resultWords = document.createTextNode(message);
	outputWord.appendChild(resultWords);
	outputPhraseTarget.appendChild(outputWord);

}

//count letters
function countLetters(){

	message = "Number of letters: "+inputArea.value.split(" ").join(" ");
	const outputPhraseTarget = document.createElement("ul");
	outputProcess.appendChild(outputPhraseTarget);

	const outputLetters = document.createElement("li");
	const resultLetters = document.createTextNode(message);
	outputLetters.appendChild(resultLetters);
	outputPhraseTarget.appendChild(outputLetters);

}

//count vowels
function countVowels(str) {
	
/*	let matches = str.match(/[aeiou]/gi);
	let vowelCounter = matches ? matches.length: 0;*/
	
	
	/*
	for(i=0;i<str.length;i++) {
		
		chr = str.charAt[i];
		if(chr == "a" || (chr == "i") || (chr = "e") || (chr = "o") || (chr = "u"))*/
	
	message = "Number of vowels: "+inputArea.value.split(" ").join(" ");
	const outputPhraseTarget = document.createElement("ul");
	outputProcess.appendChild(outputPhraseTarget);
	
	const outputVowels = document.createElement("li");
	const resultVowelnum = document.createTextNode(message);
	outputVowels.appendChild(resultVowelnum);
	outputPhraseTarget.appendChild(outputVowels);
	}



//count consonants
function countConsonants() {
	
	message = "Number of consonants: "+inputArea.value.split(" ").join(" ");
	const outputPhraseTarget = document.createElement("ul");
	outputProcess.appendChild(outputPhraseTarget);
	

	const outputConsonant = document.createElement("li");
	const resultConsonant = document.createTextNode(message);
	outputConsonant.appendChild(resultConsonant);
	outputPhraseTarget.appendChild(outputConsonant);

}