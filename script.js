/** @format */

let input = document.querySelector("input");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
add.addEventListener("click", function () {
	let listItem = document.createElement("li");
	let deletebtn = document.createElement("button");
	deletebtn.classList.add("delete");
	deletebtn.innerText = "delete";
	let inputvalue = input.value;
	listItem.innerText = inputvalue;
	list.appendChild(listItem);
	listItem.append(deletebtn);
	input.value = "";
});

list.addEventListener("click", function (event) {
	if (event.target.nodeName == "BUTTON") {
		let listItem = event.target.parentElement;
		listItem.remove();
		console.log("deleted");
	}
});
