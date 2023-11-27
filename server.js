// Import and initialize express
const express = require("express");
const app = express();

// Add all static files in the root directory
app.use(express.static("client"));

app.get("/data", (req, resp) =>
{
	const serverData = "Hello, World!";
    resp.send(serverData);
});

// Start server
app.listen(8080);