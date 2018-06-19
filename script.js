var mybutton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(event){
	if (input.value.length > 0 ) {
	createListElement();
	}
}


function addListAfterKeyPress(event){
	if (input.value.length > 0 && event.keyCode === 13) {
	createListElement();
	}
}

mybutton.addEventListener("click",addListAfterClick);  //fuction name, its not a call. System will do the call for us.
													

input.addEventListener("keypress", addListAfterKeyPress); // event paramater is automatically sent to the function, as this is only the name NOT a call! 
														