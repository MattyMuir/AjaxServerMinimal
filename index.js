"use strict";

async function ButtonClicked()
{
	let response = await fetch("http://localhost:8080/data");
	let body = await response.text();
	document.getElementById("console").innerHTML = body;
}

// Add onclick listener to button
const btn = document.getElementById("MainBtn");
btn.onclick = ButtonClicked;