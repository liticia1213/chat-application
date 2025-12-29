const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const authRoutes = require("./routes/auth");

// Middleware pour lire le JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Chat Application Server is running");
});

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/chat-app")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
