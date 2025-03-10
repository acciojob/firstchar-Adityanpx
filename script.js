function firstChar(text) {
	let newText = text.trim();
	if(newText.length === 0 ){
		return ""
	}
	return newText[0];
  // your code here
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
