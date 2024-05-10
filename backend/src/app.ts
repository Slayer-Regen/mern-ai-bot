import express from "express";
import { config } from "dotenv";

import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
config();
const app = express();

//middlewares
app.use(cors({ origin: "http://mern-ai-bot-12.vercel.app",methods: ["POST" , "GET"] , credentials: true }));
app.use(express.json());
mongoose.connect('mongodb+srv://slayer:NlCrSaq4GhH2TSPx@cluster0.qh1zo6f.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production


app.use("/api/v1", appRouter);

export default app;
