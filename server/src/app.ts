import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRoute from './routes/email.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("✅ Email API is running"));
app.use("/api/send-email", emailRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
