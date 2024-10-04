
const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
	button.addEventListener("click", (e) => {
		const buttonValue = e.target.innerHTML;
		
		if (buttonValue === "=") {
			try {
				string = eval(string);
				input.value = string;
			} catch (error) {
				input.value = "Error";
			}
		} else if (buttonValue === "C") {
			string = "";
			input.value = "";
		} else {
			if (
				["+", "-", "*", "/"].includes(buttonValue) &&
				["+", "-", "*", "/"].includes(string.slice(-1))
			) {
				return;
			}
			string += buttonValue;
			input.value = string;
		}
	});
});