const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chat Application Server is running");
});

const PORT = 5000;
mongoose
  .connect("mongodb://127.0.0.1:27017/chat-app")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
