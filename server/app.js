import express from "express";

const app = express();
const PORT = 5000;

/**
 * 1. Simple root route
 */

app.get("/", (req, res) => {
  res.send("Welcome to Meghana's Express ES6 Setup ");
});

/**
 * 2. Example GET route with plain response
 */
app.get("/get", (req, res) => {
  res.json({ message: "This is a GET route example" });
});


// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
