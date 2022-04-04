const express = require("express");
const { stringify } = require("nodemon/lib/utils");
const { chats } = require("./data/data")
const dotenv = require("dotenv")
const app = express();
const userRoutes = require("./Routes/userRoutes")
const chatRoutes = require("./Routes/chatRoutes")
const connectDB = require('./config/db')
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")
dotenv.config();

connectDB();

app.use(express.json())
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("hello")
})

app.use("/api/user", userRoutes)
app.use("/api/chat", chatRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`runnning on ${port}`)
})