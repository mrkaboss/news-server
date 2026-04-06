import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import newsRoutes from "./routes/newsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import fileUpload from "express-fileupload";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));


app.use("/uploads", express.static("uploads"));

connectDB();


app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🔥");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});