"use strict";

async function ButtonClicked()
{
	try
	{
		const response = await fetch("http://localhost:8080/data");
		if (!response.ok) throw TypeError // Propagate 404 as exception

		const body = await response.text();
		document.getElementById("console").innerHTML = body;
	}
	catch (exception)
	{
		if (!(exception instanceof TypeError)) throw exception;

		// Error handling here!
		document.getElementById("console").innerHTML = "Unable to fetch";
	}
}

// Add onclick listener to button
const btn = document.getElementById("MainBtn");
btn.onclick = ButtonClicked;